import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { gallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description: "The purpose of the Honor of the Force demonstration and a contact placeholder.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title="A place for the interviews to live"
        lede="A visitor should be able to find a person, watch the conversation, and understand how the event changed the people around it."
        frame={gallery.field}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5 text-lg leading-8 text-ink/80">
            <p>
              Honor of the Force would collect long-form interviews with state police officers who were seriously wounded in the line of duty, and with the families of officers who died while serving.
            </p>
            <p>
              The purpose is witness, not fundraising copy. The films are meant to be watched at length, with the transcript available beside them.
            </p>
            <p>
              This preview shows the structure: a homepage, a filterable library, individual story pages, a memorial chapter, a recovery chapter, and a contact point. It does not represent a real agency, and it does not use an official seal.
            </p>
            <p>
              Photographs throughout the site are downloaded from Pexels under the Pexels License. They illustrate patrol, remembrance, recovery, and family life. They are not pictures of the fictional people in the scripts, and they are not records of real interviews.
            </p>
          </div>
          <aside className="h-fit bg-white p-7 shadow-[0_20px_50px_rgb(12_27_48/0.06)]">
            <h2 className="font-serif text-3xl text-navy">Contact</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              Placeholder for the customer conversation. No messages are delivered from this demonstration.
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="uppercase tracking-[0.16em] text-gold">Project desk</dt>
                <dd className="mt-1">Honor of the Force, demonstration office</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.16em] text-gold">Email</dt>
                <dd className="mt-1">hello@honoroftheforce.example</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.16em] text-gold">Telephone</dt>
                <dd className="mt-1">(000) 555-0148</dd>
              </div>
            </dl>
          </aside>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[gallery.interview, gallery.flag, gallery.hallway].map((frame) => (
            <figure key={frame.src} className="bg-navy">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={frame.src} alt={frame.alt} fill sizes="(min-width: 640px) 30vw, 100vw" className={`object-cover ${frame.position}`} />
              </div>
              <figcaption className="bg-cream px-1 py-3 text-[0.68rem] uppercase leading-5 tracking-[0.12em] text-ink/55">
                Illustrative · {frame.credit}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
