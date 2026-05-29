import Link from "next/link";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#product" },
      { label: "Pricing", href: "#pricing" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "Candidates", href: "#solutions" },
      { label: "Employers", href: "#solutions" },
      { label: "Colleges", href: "#solutions" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog/new" },
      { label: "Help Center", href: "#contact" },
      { label: "Guides", href: "#resources" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#overview" },
      { label: "Contact", href: "#contact" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-3 font-semibold">
              <span className="h-3.5 w-3.5 rounded-[3px] bg-accent shadow-[0_0_0_4px_rgba(74,139,255,0.18)]" />
              CareerXel
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-mist">
              An AI-native career and recruitment platform. Built for candidates, employers, and colleges.
            </p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{group.title}</h3>
              <div className="mt-4 grid gap-2">
                {group.links.map((link) => (
                  link.href.startsWith("/") ? (
                    <Link key={link.label} href={link.href} className="text-sm text-mist transition hover:text-white">{link.label}</Link>
                  ) : (
                    <a key={link.label} href={link.href} className="text-sm text-mist transition hover:text-white">{link.label}</a>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-mist">
          (c) 2026 CareerXel - All rights reserved
        </div>
      </div>
    </footer>
  );
}
