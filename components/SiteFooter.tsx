import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy-deep text-cream">
      <div className="mx-auto max-w-6xl px-4 pt-14">
        <div className="h-px w-16 bg-gold" />
        <div className="grid gap-10 py-10 sm:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="font-serif text-3xl">Honor of the Force</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-cream/75">
              A demonstration of a documentary website. Every officer, family member, injury, and death in these pages is fictional. The photographs are illustrative and were not made for these scripts.
            </p>
          </div>
          <div className="text-sm leading-8">
            <p className="uppercase tracking-[0.18em] text-gold">Visit</p>
            <p><Link href="/stories" className="hover:text-gold">Their Stories</Link></p>
            <p><Link href="/fallen" className="hover:text-gold">Remembering the Fallen</Link></p>
            <p><Link href="/recovery" className="hover:text-gold">The Road to Recovery</Link></p>
            <p><Link href="/about" className="hover:text-gold">About and contact</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
