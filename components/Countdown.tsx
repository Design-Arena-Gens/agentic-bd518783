"use client";

import { useEffect, useMemo, useState } from "react";

function getTimeParts(diffMs: number) {
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = target - now;
  const { days, hours, minutes, seconds } = getTimeParts(diff);

  return (
    <div className="countdown" role="timer" aria-live="polite">
      <div className="count-seg"><div className="count-num">{days}</div><div className="count-label">Tage</div></div>
      <div className="count-seg"><div className="count-num">{hours}</div><div className="count-label">Stunden</div></div>
      <div className="count-seg"><div className="count-num">{minutes}</div><div className="count-label">Minuten</div></div>
      <div className="count-seg"><div className="count-num">{seconds}</div><div className="count-label">Sekunden</div></div>
    </div>
  );
}
