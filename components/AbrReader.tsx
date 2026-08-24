"use client";

import { useEffect, useState } from "react";

export function AbrReader() {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 2500);

    fetch("/ABR.pdf", { method: "HEAD", signal: controller.signal })
      .then((response) => setAvailable(response.ok))
      .catch(() => setAvailable(false))
      .finally(() => window.clearTimeout(timer));

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, []);

  if (available === null) {
    return <p className="empty-state">Checking for the latest issue…</p>;
  }

  if (!available) {
    return (
      <div className="info-card overlay-pad empty-panel">
        <h2>Digital magazine</h2>
        <p>
          The Aitchison Business Review reader will load here when <strong>ABR.pdf</strong> is
          published on the site.
        </p>
      </div>
    );
  }

  return (
    <div className="abr-frame">
      <iframe title="Aitchison Business Review" src="/ABR.pdf" />
    </div>
  );
}
