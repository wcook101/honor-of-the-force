import Link from "next/link";
import Image from "next/image";
import { StoryCard } from "@/components/StoryCard";
import { gallery } from "@/lib/images";
import { stories, storiesByKind } from "@/lib/stories";

export default function HomePage() {
  const featured = stories.slice(0, 3);
  const [lead, ...rest] = featured;
  const fallen = storiesByKind("family")[0];
  const recovery = storiesByKind("wounded")[1];

  return (
    <main>
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy text-cream">
        <Image
          src={gallery.psp.src}
          alt={gallery.psp.alt}
          fill
          priority
          sizes="100vw"
          className="hero-drift object-cover object-[74%_center] md:object-[center_58%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/25 via-42% to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:pb-20">
          <p className="text-xs uppercase tracking-[0.34em] text-gold [text-shadow:0_1px_10px_rgb(5_13_24/0.8)]">Honor of the Force</p>
          <div className="mt-5 h-px w-16 bg-gold" />
          <h1 className="mt-6 max-w-4xl font-serif text-4xl uppercase leading-[0.95] tracking-wide [text-shadow:0_2px_18px_rgb(5_13_24/0.85)] sm:text-6xl lg:text-7xl">
            Honoring the PA State Police
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cream [text-shadow:0_1px_12px_rgb(5_13_24/0.8)] sm:text-xl">
            Interviews with officers wounded in the line of duty, and with the families of officers who died while serving.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-cream/80 [text-shadow:0_1px_10px_rgb(5_13_24/0.8)]">
            An independent documentary demonstration. Not operated or endorsed by the Pennsylvania State Police.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/stories" className="bg-gold px-6 py-3 text-center text-sm font-semibold text-navy-deep">
              Explore the interviews
            </Link>
            <Link href="/fallen" className="border border-gold/80 px-6 py-3 text-center text-sm text-cream">
              Remembering the Fallen
            </Link>
          </div>
          <p className="mt-8 max-w-xl text-[0.68rem] uppercase leading-5 tracking-[0.14em] text-gold-soft/90">
            Illustrative photograph ·{" "}
            <a className="underline decoration-gold/50 underline-offset-2" href="https://commons.wikimedia.org/wiki/File:Pennsylvania_State_Police_Ford_Interceptor_Utility.jpg">
              Raymond Wambsgans
            </a>
            {" · "}
            <a className="underline decoration-gold/50 underline-offset-2" href="https://creativecommons.org/licenses/by-sa/2.0/">
              CC BY-SA 2.0
            </a>
            {" · Not an officer from these samples"}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">The project</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl">A record of the life that follows</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-ink/80">
          <p className="border-l border-gold pl-5 font-serif text-2xl leading-snug text-navy sm:text-3xl">
            One set of interviews stays with the long middle of an injury. The other stays with the household that remains.
          </p>
          <p>
            Honor of the Force is a film project about aftermath. Officers who were seriously hurt talk through the work of rebuilding a body, a household, and a working life.
          </p>
          <p>
            Spouses, parents, and siblings speak more quietly: the phone call, the week after the service, and the ordinary objects that remain.
          </p>
          <p className="text-base text-ink/60">
            This website is a customer demonstration. The six interviews are sample scripts, not accounts of real people. The photographs are licensed illustrations.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">Featured</p>
              <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">Stories on the reel</h2>
            </div>
            <Link href="/stories" className="text-sm font-semibold tracking-wide text-navy">
              All interviews
            </Link>
          </div>
          <div className="mt-12 space-y-14">
            <StoryCard story={lead} prominent />
            <div className="grid gap-12 sm:grid-cols-2">
              {rest.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <Link href="/fallen" className="group relative isolate min-h-[78svh] overflow-hidden bg-navy text-cream">
          <Image
            src={gallery.memorial.src}
            alt={gallery.memorial.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`object-cover transition duration-700 ease-out motion-safe:group-hover:scale-[1.04] ${gallery.memorial.position}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy/20" />
          <div className="relative z-10 flex min-h-[78svh] flex-col justify-end p-6 sm:p-12">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Remembering the Fallen</p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight sm:text-5xl">Family perspectives, told without spectacle</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-cream/80">
              Sample interviews with a spouse, a parent, and a sister. {fallen.name} is one of the fictional profiles.
            </p>
            <span className="mt-6 h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
          </div>
        </Link>
        <Link href="/recovery" className="group relative isolate min-h-[78svh] overflow-hidden bg-navy text-cream">
          <Image
            src={gallery.therapy.src}
            alt={gallery.therapy.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`object-cover transition duration-700 ease-out motion-safe:group-hover:scale-[1.04] ${gallery.therapy.position}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy/25" />
          <div className="relative z-10 flex min-h-[78svh] flex-col justify-end p-6 sm:p-12">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">The Road to Recovery</p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight sm:text-5xl">Injury, rehabilitation, and the people who stayed</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-cream/80">
              Three fictional officers talk about therapy, limited duty, and the household around them. {recovery.name} is a sample, not the person in this photograph.
            </p>
            <span className="mt-6 h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
          </div>
        </Link>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:py-28">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] overflow-hidden bg-navy">
            <Image src={gallery.family.src} alt={gallery.family.alt} fill sizes="40vw" className={`object-cover ${gallery.family.position}`} />
          </div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden bg-navy">
            <Image src={gallery.support.src} alt={gallery.support.alt} fill sizes="40vw" className={`object-cover ${gallery.support.position}`} />
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">The household</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl">Support, filmed at the scale of a room</h2>
          <p className="mt-5 text-lg leading-8 text-ink/80">
            The films stay with rides, forms, breakfast, and the person who remains after a procession. These pictures suggest that scale. They are not portraits of the sample families.
          </p>
          <p className="mt-4 text-[0.68rem] uppercase leading-5 tracking-[0.14em] text-ink/45">
            Illustrative photographs · {gallery.family.credit} · {gallery.support.credit}
          </p>
          <Link href="/about" className="mt-8 inline-block border-b border-gold pb-1 text-sm font-semibold text-navy">
            About the demonstration
          </Link>
        </div>
      </section>
    </main>
  );
}
