import Image from "next/image";
import type { Frame } from "@/lib/images";

export function PageHero({
  kicker,
  title,
  lede,
  frame,
  daylight = false,
}: {
  kicker: string;
  title: string;
  lede: string;
  frame: Frame;
  daylight?: boolean;
}) {
  const shadow = daylight ? "[text-shadow:0_2px_16px_rgb(5_13_24/0.85)]" : "";
  return (
    <section className="relative isolate min-h-[78svh] overflow-hidden bg-navy text-cream">
      <Image
        src={frame.src}
        alt={frame.alt}
        fill
        priority
        sizes="100vw"
        className={`hero-drift object-cover ${frame.position ?? "object-center"}`}
      />
      {daylight ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-navy-deep/28 via-48% to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep/45 via-transparent to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/78 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/40 to-transparent" />
        </>
      )}
      <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28">
        <p className={`text-xs uppercase tracking-[0.32em] text-gold ${shadow}`}>{kicker}</p>
        <div className="mt-4 h-px w-14 bg-gold" />
        <h1 className={`mt-6 max-w-4xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl ${shadow}`}>{title}</h1>
        <p className={`mt-6 max-w-2xl text-lg leading-8 text-cream/85 ${shadow}`}>{lede}</p>
        <p className={`mt-8 max-w-xl text-[0.68rem] uppercase leading-5 tracking-[0.16em] text-gold-soft/90 ${shadow}`}>
          Illustrative photograph ·{" "}
          {frame.sourceHref ? (
            <a className="underline decoration-gold/50 underline-offset-2" href={frame.sourceHref}>
              {frame.credit}
            </a>
          ) : (
            frame.credit
          )}
          {frame.license ? (
            <>
              {" · "}
              <a className="underline decoration-gold/50 underline-offset-2" href={frame.license.href}>
                {frame.license.name}
              </a>
            </>
          ) : null}
          {" · Not a person from these samples"}
        </p>
      </div>
    </section>
  );
}
