import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2">
        <div>
          <p className="font-serif text-2xl">Honor of the Force</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-cream/75">
            A demonstration of a documentary website. Every officer, family member, injury, and death in these pages is fictional.
          </p>
        </div>
        <div className="text-sm leading-7">
          <p className="uppercase tracking-[0.16em] text-gold">Visit</p>
          <p><Link href="/stories">Their Stories</Link></p>
          <p><Link href="/fallen">Remembering the Fallen</Link></p>
          <p><Link href="/recovery">The Road to Recovery</Link></p>
          <p><Link href="/about">About and contact</Link></p>
        </div>
      </div>
    </footer>
  );
}
