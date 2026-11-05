"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/stories", label: "Their Stories" },
  { href: "/fallen", label: "The Fallen" },
  { href: "/recovery", label: "Recovery" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-gold/30 bg-navy/95 text-cream backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="block text-[0.65rem] uppercase tracking-[0.28em] text-gold">Documentary</span>
          <span className="font-serif text-xl leading-none sm:text-2xl">Honor of the Force</span>
        </Link>
        <button
          className="rounded-sm border border-white/20 px-3 py-2 text-sm md:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={`${open ? "absolute inset-x-0 top-full block border-b border-white/10 bg-navy px-4 py-3" : "hidden"} md:static md:block md:border-0 md:bg-transparent md:p-0`}>
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 text-sm ${active ? "text-gold" : "text-cream/85"}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
