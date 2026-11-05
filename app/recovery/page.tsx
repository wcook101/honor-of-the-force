import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StoryCard } from "@/components/StoryCard";
import { gallery } from "@/lib/images";
import { storiesByKind } from "@/lib/stories";

export const metadata: Metadata = {
  title: "The Road to Recovery",
  description: "Sample interviews about injury, rehabilitation, and family support.",
};

const steps = [
  {
    number: "01",
    title: "The injury, told once",
    text: "Enough context to understand the body. The film does not linger on the incident.",
  },
  {
    number: "02",
    title: "Rehabilitation",
    text: "Hallways, appointments, and the people who learned the schedule.",
  },
  {
    number: "03",
    title: "A working life after",
    text: "Desk duty, teaching, or a different watch. Usefulness without pretending the injury vanished.",
  },
];

export default function RecoveryPage() {
  const officers = storiesByKind("wounded");

  return (
    <main>
      <PageHero
        kicker="The Road to Recovery"
        title="The long middle of an injury"
        lede="These sample films follow rehabilitation, limited duty, and the family logistics around both. They are about repetition and support, not a single dramatic recovery."
        frame={gallery.therapy}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden bg-navy sm:aspect-[4/3]">
            <Image
              src={gallery.hallway.src}
              alt={gallery.hallway.alt}
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className={`object-cover ${gallery.hallway.position}`}
            />
          </div>
          <ol className="grid gap-8">
            {steps.map((step) => (
              <li key={step.number} className="border-t border-gold pt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">{step.number}</p>
                <h2 className="mt-2 font-serif text-3xl text-navy">{step.title}</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-ink/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-8 text-[0.68rem] uppercase leading-5 tracking-[0.14em] text-ink/45">
          Illustrative photographs · {gallery.therapy.credit} · {gallery.hallway.credit} · Not the officers in these samples
        </p>
        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          {officers.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
        <p className="mt-12">
          <Link href="/fallen" className="border-b border-gold pb-1 text-sm font-semibold text-navy">
            Continue to Remembering the Fallen
          </Link>
        </p>
      </section>
    </main>
  );
}
