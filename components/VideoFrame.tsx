"use client";

import { useState } from "react";

export function VideoFrame({
  title,
  runtime,
}: {
  title: string;
  runtime: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-sm bg-navy-deep text-cream shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.16em] text-gold-soft">
        <span>Interview player</span>
        <span>{runtime} sample</span>
      </div>
      <div className="relative flex min-h-72 flex-col items-start justify-end bg-[radial-gradient(circle_at_30%_20%,rgb(184_149_108/0.28),transparent_40%),linear-gradient(160deg,#16304f,#07111e)] p-6 sm:min-h-96 sm:p-10">
        <p className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl">{title}</p>
        <p className="mt-3 max-w-lg text-sm text-cream/80">
          Demonstration player. No interview file is attached. The script on this page is fictional sample writing.
        </p>
        <button
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-deep"
          type="button"
          aria-pressed={open}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 12 14" className="h-3.5 w-3" aria-hidden="true">
            <path d="M0 0 L12 7 L0 14 Z" fill="currentColor" />
          </svg>
          {open ? "Hide sample note" : "Play sample note"}
        </button>
        {open ? (
          <p className="mt-5 max-w-xl border-l border-gold/70 pl-4 text-sm leading-6 text-cream/90">
            In a finished film this control would start the interview. For the customer demonstration it confirms the player, the runtime, and the place a licensed video would sit.
          </p>
        ) : null}
      </div>
    </div>
  );
}
