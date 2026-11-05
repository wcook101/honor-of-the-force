import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The purpose of the Honor of the Force demonstration and a contact placeholder.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">About</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl text-navy">A place for the interviews to live</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-lg leading-8 text-ink/80">
          <p>
            Honor of the Force would collect long-form interviews with state police officers who were seriously wounded in the line of duty, and with the families of officers who died while serving.
          </p>
          <p>
            The purpose is witness, not fundraising copy. A visitor should be able to find a person, watch the conversation, and understand how the event changed the people around it.
          </p>
          <p>
            This preview shows the structure: a homepage, a filterable library, individual story pages, a memorial chapter, a recovery chapter, and a contact point. It does not represent a real agency, and it does not use an official seal.
          </p>
        </div>
        <aside className="h-fit border border-line bg-white p-6">
          <h2 className="font-serif text-2xl text-navy">Contact</h2>
          <p className="mt-3 text-sm leading-6 text-ink/75">
            Placeholder for the customer conversation. No messages are delivered from this demonstration.
          </p>
          <dl className="mt-5 space-y-3 text-sm">
            <div>
              <dt className="uppercase tracking-[0.14em] text-gold">Project desk</dt>
              <dd>Honor of the Force, demonstration office</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.14em] text-gold">Email</dt>
              <dd>hello@honoroftheforce.example</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.14em] text-gold">Telephone</dt>
              <dd>(000) 555-0148</dd>
            </div>
          </dl>
        </aside>
      </div>
    </main>
  );
}
