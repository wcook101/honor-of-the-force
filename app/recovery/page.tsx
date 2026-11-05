import type { Metadata } from "next";
import Link from "next/link";
import { StoryCard } from "@/components/StoryCard";
import { storiesByKind } from "@/lib/stories";

export const metadata: Metadata = {
  title: "The Road to Recovery",
  description: "Sample interviews about injury, rehabilitation, and family support.",
};

export default function RecoveryPage() {
  const officers = storiesByKind("wounded");

  return (
    <main>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">The Road to Recovery</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-navy">The long middle of an injury</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            These sample films follow rehabilitation, limited duty, and the family logistics around both. They are about repetition and support, not a single dramatic recovery.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <ol className="grid gap-6 md:grid-cols-3">
          <li className="border-t border-gold pt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-gold">01</p>
            <h2 className="mt-2 font-serif text-2xl text-navy">The injury, told once</h2>
            <p className="mt-2 text-sm leading-6 text-ink/75">Enough context to understand the body. The film does not linger on the incident.</p>
          </li>
          <li className="border-t border-gold pt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-gold">02</p>
            <h2 className="mt-2 font-serif text-2xl text-navy">Rehabilitation</h2>
            <p className="mt-2 text-sm leading-6 text-ink/75">Hallways, appointments, and the people who learned the schedule.</p>
          </li>
          <li className="border-t border-gold pt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-gold">03</p>
            <h2 className="mt-2 font-serif text-2xl text-navy">A working life after</h2>
            <p className="mt-2 text-sm leading-6 text-ink/75">Desk duty, teaching, or a different watch. Usefulness without pretending the injury vanished.</p>
          </li>
        </ol>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {officers.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
        <p className="mt-10">
          <Link href="/fallen" className="text-sm font-semibold text-navy">
            Continue to Remembering the Fallen
          </Link>
        </p>
      </section>
    </main>
  );
}
