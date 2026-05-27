"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const nav = ["Product", "Solutions", "Features", "AI", "Pricing", "Resources"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-night/90 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3 text-base font-semibold tracking-tight">
            <span className="h-3.5 w-3.5 rounded-[3px] bg-accent shadow-[0_0_0_4px_rgba(74,139,255,0.18)]" />
            CareerXel
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="flex items-center gap-1 text-sm text-mist transition hover:text-white">
                {item}
                {item === "Solutions" ? <ChevronDown className="h-3 w-3 opacity-70" /> : null}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <a className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10" href="#contact">
              Sign in
            </a>
            <a className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-[#6BA3FF]" href="#contact">
              Get started
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 sm:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
            Menu
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-night/95 p-5 sm:hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3 text-base font-semibold text-white">
              <span className="h-3.5 w-3.5 rounded-[3px] bg-accent shadow-[0_0_0_4px_rgba(74,139,255,0.18)]" />
              CareerXel
            </div>
            <button type="button" onClick={() => setMenuOpen(false)} className="rounded-lg border border-white/15 p-2 text-white/90 hover:bg-white/10" aria-label="Close menu">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-8 space-y-4">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl border border-white/10 bg-[#14182A] px-4 py-4 text-lg font-medium text-white transition hover:border-accent hover:bg-[#1f2a4f]"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="mt-8 space-y-3">
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="block rounded-2xl bg-accent px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#6BA3FF]">
              View pricing
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block rounded-2xl border border-white/10 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10">
              Contact sales
            </a>
          </div>
        </div>
      ) : null}

      <div className="h-9 overflow-hidden border-b border-line bg-navy">
        <div className="mx-auto flex h-full max-w-7xl items-center gap-4 px-5 sm:px-8">
          <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-accent" />
          <div className="overflow-hidden">
            <div className="signal-track flex whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
              <span className="pr-12"><b className="text-accent">LIVE</b> - 12,847 interviews this week - 3.2K jobs posted - <b className="text-accent">47 colleges onboarded</b> - 8 languages supported - uptime 99.98%</span>
              <span className="pr-12"><b className="text-accent">LIVE</b> - 12,847 interviews this week - 3.2K jobs posted - <b className="text-accent">47 colleges onboarded</b> - 8 languages supported - uptime 99.98%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-night/95 px-4 py-3 sm:hidden">
        <div className="mx-auto flex max-w-7xl gap-3">
          <a href="#pricing" className="flex-1 rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#6BA3FF]">
            Pricing
          </a>
          <a href="#contact" className="flex-1 rounded-lg border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
