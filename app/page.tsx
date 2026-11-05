import Link from "next/link";
import { StoryCard } from "@/components/StoryCard";
import { Still } from "@/components/Still";
import { stories, storiesByKind } from "@/lib/stories";

export default function HomePage() {
  const featured = stories.slice(0, 3);
  const fallen = storiesByKind("family")[0];
  const recovery = storiesByKind("wounded")[0];

  return (
    <main>
      <section className="bg-navy text-cream">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">State police documentary</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] sm:text-7xl">
              Honor of the Force
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cream/80">
              Interviews with officers wounded in the line of duty, and with the families of officers who died while serving. The films ask what changed after the uniform came home, or did not.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/stories" className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-deep">
                Explore the interviews
              </Link>
              <Link href="/fallen" className="rounded-full border border-gold/70 px-5 py-3 text-sm text-cream">
                Remembering the Fallen
              </Link>
            </div>
          </div>
          <Still name="road" label="Opening frame" className="h-72 rounded-sm sm:h-96" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">The project</p>
          <h2 className="mt-3 font-serif text-4xl text-navy">A record of the life that follows</h2>
        </div>
        <div className="space-y-4 text-lg leading-8 text-ink/80">
          <p>
            Honor of the Force is a film project about aftermath. One set of interviews stays with officers who were seriously hurt and then had to rebuild a body, a household, and a working life.
          </p>
          <p>
            The other stays with spouses, parents, and siblings. Those films are quieter. They are about the phone call, the week after the service, and the ordinary objects that remain.
          </p>
          <p className="text-base text-ink/60">
            This website is a customer demonstration. The six interviews are sample scripts, not accounts of real people.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Featured</p>
              <h2 className="mt-2 font-serif text-4xl text-navy">Stories on the reel</h2>
            </div>
            <Link href="/stories" className="text-sm font-semibold text-navy">
              All interviews
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featured.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 lg:grid-cols-2">
        <Link href="/fallen" className="group overflow-hidden rounded-sm bg-navy text-cream">
          <Still name={fallen.still} label="Family interview" className="h-56" />
          <div className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Remembering the Fallen</p>
            <h2 className="mt-2 font-serif text-3xl">Family perspectives, told without spectacle</h2>
            <p className="mt-3 text-sm leading-6 text-cream/75">
              Sample interviews with a spouse, a parent, and a sister. Each one links to the full script and player.
            </p>
          </div>
        </Link>
        <Link href="/recovery" className="group overflow-hidden rounded-sm border border-line bg-white">
          <Still name={recovery.still} label="Recovery interview" className="h-56" />
          <div className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">The Road to Recovery</p>
            <h2 className="mt-2 font-serif text-3xl text-navy">Injury, rehabilitation, and the people who stayed</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              Three fictional officers talk about therapy, limited duty, and the household schedule around them.
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
