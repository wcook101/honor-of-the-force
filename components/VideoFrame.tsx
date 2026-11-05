"use client";

import { useState } from "react";
import Image from "next/image";
import type { Frame } from "@/lib/images";

export function VideoFrame({
  title,
  runtime,
  frame,
}: {
  title: string;
  runtime: string;
  frame: Frame;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-navy-deep text-cream shadow-[0_30px_80px_rgb(5_13_24/0.35)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-gold-soft sm:px-6">
        <span>Interview player</span>
        <span>{runtime} sample</span>
      </div>
      <div className="relative min-h-80 sm:min-h-[28rem]">
        <Image
          src={frame.src}
          alt={frame.alt}
          fill
          sizes="(min-width: 1152px) 72rem, 100vw"
          className={`object-cover ${frame.position ?? "object-center"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/45 to-navy/25" />
        <div className="relative z-10 flex min-h-80 flex-col items-start justify-end p-6 sm:min-h-[28rem] sm:p-10">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">Demonstration player</p>
          <p className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-5xl">{title}</p>
          <p className="mt-4 max-w-lg text-sm leading-6 text-cream/80">
            No interview file is attached. The script on this page is fictional sample writing.
          </p>
          <button
            className="mt-6 inline-flex items-center gap-3 bg-gold px-5 py-3 text-sm font-semibold text-navy-deep"
            type="button"
            aria-pressed={open}
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 12 14" className="h-3.5 w-3" aria-hidden="true">
              <path d="M0 0 L12 7 L0 14 Z" fill="currentColor" />
            </svg>
            {open ? "Hide sample note" : "Play sample note"}
          </button>
        </div>
      </div>
      {open ? (
        <p className="border-t border-gold/40 px-6 py-5 text-sm leading-6 text-cream/90 sm:px-10">
          In a finished film this control would start the interview. For the customer demonstration it confirms the player, the runtime, and the place a licensed video would sit.
        </p>
      ) : null}
      <p className="border-t border-white/10 px-6 py-3 text-[0.68rem] uppercase tracking-[0.16em] text-gold-soft/80 sm:px-10">
        Illustrative photograph · {frame.credit} · Not this interview
      </p>
    </div>
  );
}
