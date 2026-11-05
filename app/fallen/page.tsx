import type { Metadata } from "next";
import Link from "next/link";
import { StoryCard } from "@/components/StoryCard";
import { storiesByKind } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Remembering the Fallen",
  description: "A demonstration memorial page linking to fictional family interviews.",
};

export default function FallenPage() {
  const families = storiesByKind("family");

  return (
    <main>
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Remembering the Fallen</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight">Names kept in the voice of the family</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/80">
            This chapter is for spouses, parents, and siblings. The page stays close to how a family remembers a person, and it links each perspective to a full sample interview.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 border-b border-line pb-10 md:grid-cols-3">
          <p className="font-serif text-2xl text-navy">A spouse on the week after the service.</p>
          <p className="font-serif text-2xl text-navy">A parent who wants the person, not only the badge.</p>
          <p className="font-serif text-2xl text-navy">A sister who drove through the night and then handled the practical things.</p>
        </div>
        <p className="mt-8 max-w-3xl leading-7 text-ink/75">
          None of these people existed. The structure is what a state police organization could use: a quiet memorial entry, then the films themselves. Official seals and real names are not used.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {families.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
        <p className="mt-10">
          <Link href="/stories" className="text-sm font-semibold text-navy">
            See wounded-officer interviews as well
          </Link>
        </p>
      </section>
    </main>
  );
}
