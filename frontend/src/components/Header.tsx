"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Home, Menu, X } from "lucide-react";

const nav = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog/new" },
  { label: "Resources", href: "#resources" }
];

const solutions = [
  { label: "Student", href: "/solutions/student", text: "Career tools, interviews, and job discovery." },
  { label: "Employee", href: "/solutions/employee", text: "Hiring workflows, screening, and talent insights." }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const showBackHome = pathname?.startsWith("/solutions/") || pathname === "/blog/new";

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-night/90 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="h-3.5 w-3.5 rounded-[3px] bg-accent shadow-[0_0_0_4px_rgba(74,139,255,0.18)]" />
            <span className="flex flex-col leading-none">
              <span className="text-base font-semibold tracking-tight">CareerXel</span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-mist">Accelerating Careers, Empowering Futures</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              item.label === "Solutions" ? (
                <div key={item.label} className="group relative">
                  <a href={item.href} className="flex items-center gap-1 text-sm text-mist transition hover:text-white">
                    {item.label}
                    <ChevronDown className="h-3 w-3 opacity-70 transition group-hover:rotate-180" />
                  </a>
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <div className="rounded-lg border border-white/10 bg-night p-2 shadow-glow">
                      {solutions.map((solution) => (
                        <Link key={solution.href} href={solution.href} className="block rounded-md px-4 py-3 transition hover:bg-white/10">
                          <span className="block text-sm font-semibold text-white">{solution.label}</span>
                          <span className="mt-1 block text-xs leading-5 text-mist">{solution.text}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                item.href.startsWith("/") ? (
                  <Link key={item.label} href={item.href} className="flex items-center gap-1 text-sm text-mist transition hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href} className="flex items-center gap-1 text-sm text-mist transition hover:text-white">
                    {item.label}
                  </a>
                )
              )
            ))}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            {showBackHome ? (
              <Link className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10" href="/">
                <Home className="h-4 w-4" />
                Back to home
              </Link>
            ) : null}
            <a className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10" href="https://careerxel.com/register">
              Sign in
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
              <span className="flex flex-col leading-none">
                <span>CareerXel</span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-mist">Accelerating Careers, Empowering Futures</span>
              </span>
            </div>
            <button type="button" onClick={() => setMenuOpen(false)} className="rounded-lg border border-white/15 p-2 text-white/90 hover:bg-white/10" aria-label="Close menu">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-8 space-y-4">
            {nav.map((item) => (
              item.label === "Solutions" ? (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-[#14182A] p-3">
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-1 pb-3 text-lg font-medium text-white"
                  >
                    {item.label}
                  </a>
                  <div className="grid gap-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:border-accent hover:bg-[#1f2a4f]"
                      >
                        {solution.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl border border-white/10 bg-[#14182A] px-4 py-4 text-lg font-medium text-white transition hover:border-accent hover:bg-[#1f2a4f]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl border border-white/10 bg-[#14182A] px-4 py-4 text-lg font-medium text-white transition hover:border-accent hover:bg-[#1f2a4f]"
                  >
                    {item.label}
                  </a>
                )
              )
            ))}
          </div>
          <div className="mt-8 space-y-3">
            {showBackHome ? (
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                <Home className="h-4 w-4" />
                Back to home
              </Link>
            ) : null}
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
