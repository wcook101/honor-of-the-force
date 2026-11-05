import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StoryCard } from "@/components/StoryCard";
import { gallery } from "@/lib/images";
import { storiesByKind } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Remembering the Fallen",
  description: "A demonstration memorial page linking to fictional family interviews.",
};

const notes = [
  "A spouse on the week after the service.",
  "A parent who wants the person, not only the badge.",
  "A sister who drove through the night and then handled the practical things.",
];

export default function FallenPage() {
  const families = storiesByKind("family");

  return (
    <main>
      <PageHero
        kicker="Remembering the Fallen"
        title="Names kept in the voice of the family"
        lede="This chapter is for spouses, parents, and siblings. It stays close to how a family remembers a person, then links each perspective to a full sample interview."
        frame={gallery.memorial}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-8 border-b border-line pb-12 md:grid-cols-3">
          {notes.map((note) => (
            <p key={note} className="border-t border-gold pt-4 font-serif text-2xl leading-snug text-navy">
              {note}
            </p>
          ))}
        </div>
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <p className="max-w-3xl text-lg leading-8 text-ink/75">
            None of these people existed. The structure is what a state police organization could use: a quiet memorial entry, then the films themselves. Official seals and real names are not used. The cemetery photograph is an illustration, not a memorial to anyone described here.
          </p>
          <p className="text-[0.68rem] uppercase leading-5 tracking-[0.14em] text-ink/45">
            Second photograph · {gallery.flag.credit} · Graves are not identified with the sample stories
          </p>
        </div>
        <div className="relative mt-8 aspect-[16/8] min-h-56 overflow-hidden bg-navy">
          <Image
            src={gallery.flag.src}
            alt={gallery.flag.alt}
            fill
            sizes="(min-width: 1152px) 72rem, 100vw"
            className={`object-cover ${gallery.flag.position}`}
          />
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          {families.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
        <p className="mt-12">
          <Link href="/stories" className="border-b border-gold pb-1 text-sm font-semibold text-navy">
            See wounded-officer interviews as well
          </Link>
        </p>
      </section>
    </main>
  );
}
