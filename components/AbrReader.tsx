"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";

const PDF_URL = "/ABR.pdf";
const TOTAL_PAGES = 102;
const MOBILE_BREAKPOINT = 700;

const PDFJS_SRC =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
const PDFJS_WORKER =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
const PAGE_FLIP_SRC =
  "https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.browser.min.js";

type PdfDocument = {
  numPages: number;
  getPage: (pageNumber: number) => Promise<PdfPage>;
  destroy: () => Promise<void> | void;
};

type PdfPage = {
  getViewport: (params: { scale: number }) => {
    width: number;
    height: number;
  };
  render: (params: {
    canvasContext: CanvasRenderingContext2D;
    viewport: { width: number; height: number };
  }) => { promise: Promise<void> };
};

type FlipBook = {
  on: (event: string, callback: (event: { data: unknown }) => void) => void;
  loadFromHTML: (pages: HTMLElement[]) => void;
  flip: (pageIndex: number) => void;
  flipNext: () => void;
  flipPrev: () => void;
  destroy: () => void;
};

type PdfjsLib = {
  GlobalWorkerOptions: { workerSrc: string };
  getDocument: (params: {
    url: string;
    disableAutoFetch?: boolean;
    disableStream?: boolean;
  }) => { promise: Promise<PdfDocument> };
};

type PageFlipConstructor = new (
  element: HTMLElement,
  settings: Record<string, unknown>,
) => FlipBook;

declare global {
  interface Window {
    pdfjsLib?: PdfjsLib;
    St?: { PageFlip: PageFlipConstructor };
  }
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-abr-src="${src}"]`,
    );
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.abrSrc = src;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function ensureLibraries() {
  await Promise.all([loadScript(PDFJS_SRC), loadScript(PAGE_FLIP_SRC)]);
  if (!window.pdfjsLib || !window.St?.PageFlip) {
    throw new Error("Magazine libraries failed to initialize");
  }
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
  return {
    pdfjsLib: window.pdfjsLib,
    PageFlip: window.St.PageFlip,
  };
}

export function AbrReader() {
  const bookRef = useRef<HTMLDivElement>(null);
  const flipBookRef = useRef<FlipBook | null>(null);
  const pdfRef = useRef<PdfDocument | null>(null);
  const renderedPages = useRef(new Set<number>());
  const loadingPages = useRef(new Set<number>());
  const currentPageRef = useRef(1);
  const isMobileRef = useRef(false);
  const pageSizeRef = useRef({ width: 595, height: 842 });
  const rebuildingRef = useRef(false);

  const [loadingText, setLoadingText] = useState("Opening magazine");
  const [loadingVisible, setLoadingVisible] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(TOTAL_PAGES);

  useEffect(() => {
    let cancelled = false;
    let resizeTimer: number | undefined;

    const detectDevice = () => {
      isMobileRef.current = window.matchMedia(
        `(max-width: ${MOBILE_BREAKPOINT}px)`,
      ).matches;
    };

    const updateCounter = (pageNumber: number) => {
      const pages = pdfRef.current?.numPages ?? TOTAL_PAGES;
      const next = Math.max(1, Math.min(pages, Number(pageNumber)));
      currentPageRef.current = next;
      setCurrentPage(next);
    };

    const createPageElement = (pageNumber: number) => {
      const page = document.createElement("div");
      page.className = "abr-page";
      page.dataset.pageNumber = String(pageNumber);
      page.dataset.rendered = "false";

      const canvas = document.createElement("canvas");
      canvas.className = "abr-pdf-page";
      canvas.setAttribute("aria-label", `Magazine page ${pageNumber}`);
      page.appendChild(canvas);
      return page;
    };

    const createPageContainers = (bookEl: HTMLDivElement, count: number) => {
      bookEl.replaceChildren();
      const fragment = document.createDocumentFragment();
      for (let pageNumber = 1; pageNumber <= count; pageNumber += 1) {
        fragment.appendChild(createPageElement(pageNumber));
      }
      bookEl.appendChild(fragment);
    };

    const getPageElement = (pageNumber: number) => {
      const bookEl = bookRef.current;
      if (!bookEl) return null;
      return bookEl.querySelector<HTMLElement>(
        `.abr-page[data-page-number="${pageNumber}"]`,
      );
    };

    const renderPage = async (pageNumber: number) => {
      const pdf = pdfRef.current;
      const bookEl = bookRef.current;
      if (!pdf || !bookEl) return;
      if (pageNumber < 1 || pageNumber > pdf.numPages) return;
      if (renderedPages.current.has(pageNumber)) return;
      if (loadingPages.current.has(pageNumber)) return;

      loadingPages.current.add(pageNumber);

      try {
        if (!cancelled) {
          setLoadingText(`Loading page ${pageNumber}`);
        }

        const pdfPage = await pdf.getPage(pageNumber);
        const pageElement = getPageElement(pageNumber);
        if (!pageElement) return;

        const canvas = pageElement.querySelector("canvas");
        if (!canvas) return;

        const context = canvas.getContext("2d", { alpha: false });
        if (!context) return;

        const viewport = pdfPage.getViewport({ scale: 1 });
        const containerWidth =
          pageElement.clientWidth || bookEl.clientWidth || 600;
        const containerHeight =
          pageElement.clientHeight || bookEl.clientHeight || 850;
        const fitScale = Math.min(
          containerWidth / viewport.width,
          containerHeight / viewport.height,
        );
        const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        const renderViewport = pdfPage.getViewport({
          scale: fitScale * devicePixelRatio,
        });

        canvas.width = Math.floor(renderViewport.width);
        canvas.height = Math.floor(renderViewport.height);
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.objectFit = "contain";

        await pdfPage
          .render({
            canvasContext: context,
            viewport: renderViewport,
          })
          .promise;

        renderedPages.current.add(pageNumber);
        pageElement.dataset.rendered = "true";
      } catch (err) {
        console.error(`Failed rendering page ${pageNumber}`, err);
      } finally {
        loadingPages.current.delete(pageNumber);
      }
    };

    const preloadFirstPages = async () => {
      for (let pageNumber = 1; pageNumber <= 3; pageNumber += 1) {
        if (cancelled) return;
        setLoadingText(`Preparing page ${pageNumber} of 3`);
        await renderPage(pageNumber);
      }
    };

    const preloadNextPage = (pageNumber: number) => {
      const nextPage = pageNumber + 1;
      if (nextPage > (pdfRef.current?.numPages ?? TOTAL_PAGES)) return;
      window.setTimeout(() => {
        void renderPage(nextPage);
      }, 300);
    };

    const preloadPreviousPage = (pageNumber: number) => {
      const previousPage = pageNumber - 1;
      if (previousPage < 1) return;
      window.setTimeout(() => {
        void renderPage(previousPage);
      }, 300);
    };

    const calculateBookSize = () => {
      detectDevice();
      const aspectRatio =
        pageSizeRef.current.height / pageSizeRef.current.width;
      const width = isMobileRef.current
        ? Math.min(window.innerWidth * 0.9, 560)
        : Math.min(window.innerWidth * 0.42, 620);
      return { width, height: width * aspectRatio };
    };

    const setupFlipEvents = (flipBook: FlipBook) => {
      flipBook.on("flip", (event) => {
        const pageNumber = Number(event.data) + 1;
        updateCounter(pageNumber);
        void renderPage(pageNumber);
        preloadNextPage(pageNumber);
        preloadPreviousPage(pageNumber);
      });

      flipBook.on("changeOrientation", () => {
        window.setTimeout(() => {
          void renderPage(currentPageRef.current);
        }, 200);
      });
    };

    const createFlipBook = async (bookEl: HTMLDivElement) => {
      const { PageFlip } = await ensureLibraries();
      const size = calculateBookSize();

      const flipBook = new PageFlip(bookEl, {
        width: size.width,
        height: size.height,
        size: "stretch",
        minWidth: 280,
        maxWidth: 900,
        minHeight: 400,
        maxHeight: 1200,
        showCover: false,
        usePortrait: isMobileRef.current,
        mobileScrollSupport: false,
        flippingTime: 650,
        drawShadow: true,
        maxShadowOpacity: 0.35,
        autoSize: true,
        startPage: 0,
        startZIndex: 0,
      });

      flipBook.loadFromHTML(
        Array.from(bookEl.querySelectorAll<HTMLElement>(".abr-page")),
      );
      setupFlipEvents(flipBook);
      flipBookRef.current = flipBook;
      return flipBook;
    };

    const rebuildFlipBook = async () => {
      const bookEl = bookRef.current;
      const pdf = pdfRef.current;
      if (!bookEl || !pdf || rebuildingRef.current || cancelled) return;

      rebuildingRef.current = true;
      const savedPage = currentPageRef.current;

      try {
        flipBookRef.current?.destroy();
      } catch {
        /* ignore */
      }
      flipBookRef.current = null;
      renderedPages.current.clear();
      loadingPages.current.clear();

      createPageContainers(bookEl, pdf.numPages);
      await createFlipBook(bookEl);
      updateCounter(savedPage);

      window.setTimeout(() => {
        void (async () => {
          await renderPage(savedPage);
          flipBookRef.current?.flip(savedPage - 1);
        })();
      }, 150);

      rebuildingRef.current = false;
    };

    const goToPage = async (pageNumber: number) => {
      const flipBook = flipBookRef.current;
      const pages = pdfRef.current?.numPages ?? TOTAL_PAGES;
      const next = Math.max(1, Math.min(pages, Number(pageNumber)));
      if (!flipBook) return;
      await renderPage(next);
      flipBook.flip(next - 1);
      updateCounter(next);
    };

    const initializeMagazine = async () => {
      const bookEl = bookRef.current;
      if (!bookEl) return;

      try {
        setLoadingVisible(true);
        setError(null);
        setLoadingText("Opening Aitchison Business Review…");
        detectDevice();

        const { pdfjsLib } = await ensureLibraries();
        if (cancelled) return;

        const pdf = await pdfjsLib.getDocument({
          url: PDF_URL,
          disableAutoFetch: false,
          disableStream: false,
        }).promise;

        if (cancelled) {
          await pdf.destroy();
          return;
        }

        pdfRef.current = pdf;
        setTotalPages(pdf.numPages);

        const firstPage = await pdf.getPage(1);
        const firstViewport = firstPage.getViewport({ scale: 1 });
        pageSizeRef.current = {
          width: firstViewport.width,
          height: firstViewport.height,
        };

        createPageContainers(bookEl, pdf.numPages);
        await createFlipBook(bookEl);
        updateCounter(1);
        await preloadFirstPages();

        if (cancelled) return;

        setLoadingText("Ready");
        window.setTimeout(() => {
          if (!cancelled) setLoadingVisible(false);
        }, 200);
      } catch (err) {
        console.error("ABR initialization failed:", err);
        const message =
          err instanceof Error ? err.message : "Unknown error";
        setError(
          `The magazine could not be loaded. Make sure ABR.pdf is published at /ABR.pdf. Error: ${message}`,
        );
        setLoadingVisible(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const flipBook = flipBookRef.current;
      if (!flipBook) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        flipBook.flipPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        flipBook.flipNext();
      } else if (event.key === "Home") {
        event.preventDefault();
        void goToPage(1);
      } else if (event.key === "End") {
        event.preventDefault();
        void goToPage(pdfRef.current?.numPages ?? TOTAL_PAGES);
      }
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        const oldMobile = isMobileRef.current;
        detectDevice();
        if (oldMobile !== isMobileRef.current) {
          void rebuildFlipBook();
        }
      }, 350);
    };

    void initializeMagazine();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.clearTimeout(resizeTimer);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      try {
        flipBookRef.current?.destroy();
      } catch {
        /* ignore */
      }
      flipBookRef.current = null;
      void pdfRef.current?.destroy();
      pdfRef.current = null;
    };
  }, []);

  const handlePrev = () => {
    flipBookRef.current?.flipPrev();
  };

  const handleNext = () => {
    flipBookRef.current?.flipNext();
  };

  const handleProgress = (event: ChangeEvent<HTMLInputElement>) => {
    const flipBook = flipBookRef.current;
    if (!flipBook) return;
    const pageNumber = Number(event.target.value);
    const next = Math.max(1, Math.min(totalPages, pageNumber));
    currentPageRef.current = next;
    setCurrentPage(next);
    flipBook.flip(next - 1);
  };

  return (
    <div className="abr-magazine">
      <header className="abr-topbar">
        <div className="abr-brand">ABR</div>
        <div className="abr-page-counter">
          {error ? "Unavailable" : `${currentPage} / ${totalPages}`}
        </div>
      </header>

      <div className="abr-reader">
        {loadingVisible && !error ? (
          <div className="abr-loading">
            <div className="abr-spinner" />
            <div className="abr-loading-text">{loadingText}</div>
          </div>
        ) : null}

        {error ? (
          <div className="abr-error">
            <div className="abr-error-inner">
              <h2>Unable to open the magazine</h2>
              <p>{error}</p>
            </div>
          </div>
        ) : null}

        <div id="book" className="abr-book" ref={bookRef} />

        <div className="abr-nav">
          <button type="button" aria-label="Previous page" onClick={handlePrev}>
            ‹
          </button>
          <button type="button" aria-label="Next page" onClick={handleNext}>
            ›
          </button>
        </div>

        <div className="abr-hint">SWIPE OR DRAG THE PAGE CORNER TO TURN</div>

        <div className="abr-bottom-bar">
          <input
            className="abr-progress"
            type="range"
            min={1}
            max={totalPages}
            value={currentPage}
            aria-label="Magazine page"
            onChange={handleProgress}
          />
        </div>
      </div>
    </div>
  );
}
