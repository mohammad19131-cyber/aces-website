const eventsData = [
  { name: "Build Your Own Idea", img: "XIII Vectors/BYOI raw.png" },
  { name: "Ad Making", img: "XIII Vectors/AD raw.png" },
  { name: "Investomania", img: "XIII Vectors/Investo raw.png" },
  { name: "Social Entrepreneurship", img: "XIII Vectors/Socio raw.png" },
  { name: "Fiscal Frontier", img: "XIII Vectors/FF raw.png" },
  { name: "Mall Street", img: "XIII Vectors/Mall raw.png" },
  { name: "Jurisprudential", img: "XIII Vectors/Juris raw.png" },
  { name: "Rubicon", img: "XIII Vectors/Rubicon raw.png" },
  { name: "Chess", img: "XIII Vectors/Chess raw.png" },
  { name: "MUNey", img: "XIII Vectors/Muney raw.png" },
  { name: "The Amazing Race", img: "XIII Vectors/Race raw.png" },
  { name: "Corporate Canvas", img: "XIII Vectors/Canvas raw.png" },
  { name: "Techeneurship", img: "XIII Vectors/Tech raw.png" },
  { name: "The Enterprise", img: "XIII Vectors/Enterprise raw.png" },
];

function pad(value: number) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function localCountdown() {
  const target = new Date("2027-01-08T09:00:00+05:00").getTime();
  const diff = Math.max(0, target - Date.now());
  return {
    days: pad(Math.floor(diff / 86_400_000)),
    hours: pad(Math.floor((diff % 86_400_000) / 3_600_000)),
    minutes: pad(Math.floor((diff % 3_600_000) / 60_000)),
    seconds: pad(Math.floor((diff % 60_000) / 1000)),
  };
}

function setTimer(values: { days: string; hours: string; minutes: string; seconds: string }) {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  if (days) days.textContent = values.days;
  if (hours) hours.textContent = values.hours;
  if (minutes) minutes.textContent = values.minutes;
  if (seconds) seconds.textContent = values.seconds;
}

export function closeMenu() {
  document.getElementById("navLinks")?.classList.remove("show");
  document.getElementById("menuBackdrop")?.classList.remove("show");
}

export function toggleMenu() {
  document.getElementById("navLinks")?.classList.toggle("show");
  document.getElementById("menuBackdrop")?.classList.toggle("show");
}

export function showTab(tabName: string) {
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  document.querySelectorAll(".nav-links a").forEach((link) => link.classList.remove("active"));
  document.getElementById(tabName)?.classList.add("active");
  document.getElementById("link-" + tabName)?.classList.add("active");
  window.scrollTo(0, 0);
  closeMenu();

  const brandText = document.getElementById("navBrandText");
  if (brandText) {
    brandText.innerHTML =
      tabName === "abc" ? "<strong>ABC</strong> XIV" : "<strong>ACES</strong>";
  }
}

function hideLoader() {
  const loader = document.getElementById("loaderScreen");
  if (!loader) return;
  loader.classList.add("hidden");
  window.setTimeout(() => {
    loader.style.display = "none";
  }, 1200);
}

export function initIndexSite() {
  const loaderTimer = window.setTimeout(hideLoader, 1000);
  if (document.readyState === "complete") hideLoader();

  const initialTab = window.location.hash.replace("#", "");
  if (initialTab === "society" || initialTab === "response" || initialTab === "abc") {
    showTab(initialTab);
  }

  async function time() {
    try {
      const res = await fetch("https://timer-v22m.onrender.com/api/countdown");
      const json = (await res.json()) as {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
      };
      setTimer({
        days: pad(json.days),
        hours: pad(json.hours),
        minutes: pad(json.minutes),
        seconds: pad(json.seconds),
      });
    } catch {
      setTimer(localCountdown());
    }
  }

  void time();
  const timerId = window.setInterval(time, 1000);

  const eventsList = document.getElementById("eventsList");
  if (eventsList && eventsList.childElementCount === 0) {
    eventsData.forEach((evt) => {
      const row = document.createElement("div");
      row.className = "event-row category-row";
      row.innerHTML = `
        <div class="silver-rule-left"></div>
        <a href="/study-guide">
          <div class="event-header-left">
            <div class="event-icon-wrap"><img src="${evt.img}" alt="${evt.name}"></div>
            <div class="event-title-text category-name">${evt.name}</div>
          </div>
          <div class="event-readmore">Read More →</div>
        </a>
      `;
      eventsList.appendChild(row);
    });
  }

  const slides = Array.from(document.querySelectorAll<HTMLElement>(".highlight-slide"));
  const dots = Array.from(document.querySelectorAll<HTMLElement>(".highlight-dot"));
  const prevButton = document.getElementById("highlightPrev");
  const nextButton = document.getElementById("highlightNext");
  const carousel = document.querySelector(".highlights-carousel");
  let currentIndex = 0;

  function updateHighlights() {
    const total = slides.length;
    slides.forEach((slide, index) => {
      slide.classList.remove("active", "prev", "next", "far");
      let difference = index - currentIndex;
      if (difference > total / 2) difference -= total;
      if (difference < -total / 2) difference += total;
      if (difference === 0) slide.classList.add("active");
      else if (difference === -1) slide.classList.add("prev");
      else if (difference === 1) slide.classList.add("next");
      else slide.classList.add("far");
    });
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function nextHighlight() {
    if (!slides.length) return;
    currentIndex = (currentIndex + 1) % slides.length;
    updateHighlights();
  }

  function previousHighlight() {
    if (!slides.length) return;
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateHighlights();
  }

  prevButton?.addEventListener("click", previousHighlight);
  nextButton?.addEventListener("click", nextHighlight);
  const dotHandlers = dots.map((dot, index) => {
    const handler = () => {
      currentIndex = index;
      updateHighlights();
    };
    dot.addEventListener("click", handler);
    return { dot, handler };
  });
  const slideHandlers = slides.map((slide) => {
    const handler = () => {
      if (slide.classList.contains("prev")) previousHighlight();
      else if (slide.classList.contains("next")) nextHighlight();
    };
    slide.addEventListener("click", handler);
    return { slide, handler };
  });

  const onKey = (event: KeyboardEvent) => {
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (event.key === "ArrowLeft") previousHighlight();
    if (event.key === "ArrowRight") nextHighlight();
  };
  document.addEventListener("keydown", onKey);

  let touchStartX = 0;
  let touchStartY = 0;
  const onTouchStart = (event: Event) => {
    const touch = (event as TouchEvent).changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  };
  const onTouchEnd = (event: Event) => {
    const touch = (event as TouchEvent).changedTouches[0];
    const differenceX = touchStartX - touch.clientX;
    const differenceY = touchStartY - touch.clientY;
    if (Math.abs(differenceX) < Math.abs(differenceY)) return;
    if (Math.abs(differenceX) < 50) return;
    if (differenceX > 0) nextHighlight();
    else previousHighlight();
  };
  carousel?.addEventListener("touchstart", onTouchStart, { passive: true });
  carousel?.addEventListener("touchend", onTouchEnd, { passive: true });
  if (slides.length) updateHighlights();

  const helpWrap = document.getElementById("helpWrap");
  const helpButton = document.getElementById("helpButton");
  const onHelpClick = () => {
    if (!helpWrap || !helpButton) return;
    const open = helpWrap.classList.toggle("open");
    helpButton.setAttribute("aria-expanded", open ? "true" : "false");
  };
  const onDocClick = (event: MouseEvent) => {
    if (!helpWrap || !helpButton) return;
    if (!helpWrap.contains(event.target as Node)) {
      helpWrap.classList.remove("open");
      helpButton.setAttribute("aria-expanded", "false");
    }
  };
  helpButton?.addEventListener("click", onHelpClick);
  document.addEventListener("click", onDocClick);

  const form = document.getElementById("responseForm") as HTMLFormElement | null;
  const onSubmit = (event: Event) => {
    event.preventDefault();
    const toast = document.getElementById("toast");
    toast?.classList.add("show");
    form?.reset();
    window.setTimeout(() => toast?.classList.remove("show"), 4000);
  };
  form?.addEventListener("submit", onSubmit);

  return () => {
    window.clearTimeout(loaderTimer);
    window.clearInterval(timerId);
    prevButton?.removeEventListener("click", previousHighlight);
    nextButton?.removeEventListener("click", nextHighlight);
    dotHandlers.forEach(({ dot, handler }) => dot.removeEventListener("click", handler));
    slideHandlers.forEach(({ slide, handler }) => slide.removeEventListener("click", handler));
    document.removeEventListener("keydown", onKey);
    carousel?.removeEventListener("touchstart", onTouchStart);
    carousel?.removeEventListener("touchend", onTouchEnd);
    helpButton?.removeEventListener("click", onHelpClick);
    document.removeEventListener("click", onDocClick);
    form?.removeEventListener("submit", onSubmit);
  };
}
