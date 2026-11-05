import Link from "next/link";
import type { Story } from "@/lib/stories";
import { stillFrames } from "@/lib/images";
import { Photo } from "@/components/Photo";

function PlayMark() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/80 bg-navy-deep/55 text-gold backdrop-blur-sm transition duration-500 group-hover:bg-gold group-hover:text-navy-deep">
      <svg viewBox="0 0 12 14" className="ml-0.5 h-3.5 w-3" aria-hidden="true">
        <path d="M0 0 L12 7 L0 14 Z" fill="currentColor" />
      </svg>
    </span>
  );
}

export function StoryCard({ story, prominent = false }: { story: Story; prominent?: boolean }) {
  const frame = stillFrames[story.still];

  return (
    <article className="group flex h-full flex-col">
      <Link href={`/stories/${story.slug}`} className="flex h-full flex-col">
        <Photo
          frame={frame}
          label={false}
          sizes={prominent ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          imageClassName="transition duration-700 ease-out motion-safe:group-hover:scale-[1.045]"
          className={prominent ? "aspect-[16/10] sm:aspect-[2/1]" : "aspect-[4/5]"}
        >
          <span className="absolute left-4 top-4 bg-navy-deep/80 px-2 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-gold-soft">
            Fictional sample
          </span>
          <span className="absolute bottom-4 right-4">
            <PlayMark />
          </span>
        </Photo>
        <div className="flex flex-1 flex-col pt-4">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">{story.kindLabel}</p>
          <h3 className={`mt-2 font-serif leading-tight text-navy ${prominent ? "text-4xl" : "text-3xl"}`}>{story.name}</h3>
          <p className="mt-2 text-sm text-ink/65">{story.chapter}</p>
          <p className="mt-3 flex-1 text-sm leading-6 text-ink/80">{story.excerpt}</p>
          <p className="mt-4 text-[0.68rem] uppercase leading-5 tracking-[0.14em] text-ink/45">
            {story.runtime} · Illustrative photograph · not this person
          </p>
          <span className="mt-4 h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
        </div>
      </Link>
    </article>
  );
}
