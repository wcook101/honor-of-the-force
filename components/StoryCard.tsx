import Link from "next/link";
import type { Story } from "@/lib/stories";
import { Still } from "@/components/Still";

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-white">
      <Link href={`/stories/${story.slug}`} className="flex h-full flex-col">
        <Still name={story.still} label={story.runtime} className="h-52" />
        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-gold">{story.kindLabel}</p>
          <h3 className="mt-2 font-serif text-2xl text-navy">{story.name}</h3>
          <p className="mt-1 text-sm text-ink/70">{story.chapter}</p>
          <p className="mt-3 flex-1 text-sm leading-6 text-ink/80">{story.excerpt}</p>
          <span className="mt-4 text-sm font-semibold text-navy">Open the interview</span>
        </div>
      </Link>
    </article>
  );
}
