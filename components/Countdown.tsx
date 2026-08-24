"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const empty: TimeLeft = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

function pad(value: number) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft>(empty);

  useEffect(() => {
    const target = new Date(site.eventStartISO).getTime();
    const tick = () => setTime(getTimeLeft(target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const units: { value: string; label: string }[] = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <div
      className="mx-auto grid w-full max-w-[32rem] grid-cols-4"
      aria-label={`Countdown to ${site.eventDateLabel}`}
    >
      {units.map((unit, index) => (
        <div key={unit.label} className="relative flex flex-col items-center">
          {index > 0 ? (
            <span
              aria-hidden="true"
              className="absolute inset-y-1 left-0 w-px bg-[linear-gradient(180deg,transparent,rgba(226,232,238,0.55)_18%,rgba(212,179,106,0.35)_50%,rgba(226,232,238,0.55)_82%,transparent)]"
            />
          ) : null}
          <span className="gold-text font-display min-h-[1.1em] min-w-[3ch] text-[1.55rem] font-medium tabular-nums tracking-[0.06em] md:text-[2.05rem]">
            {unit.value}
          </span>
          <span className="mt-1.5 font-body text-[0.56rem] uppercase tracking-[0.28em] text-silver/70 md:text-[0.6rem]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
