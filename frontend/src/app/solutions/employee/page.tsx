import { ArrowRight, BarChart3, CalendarCheck, UsersRound } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const features = [
  { title: "Smart Screening", text: "Shortlist qualified candidates faster with structured AI-assisted evaluation.", icon: UsersRound },
  { title: "Interview Scheduling", text: "Coordinate interview slots, candidate stages, and feedback without scattered tools.", icon: CalendarCheck },
  { title: "Hiring Analytics", text: "Track pipeline health, source quality, and hiring progress with clear dashboards.", icon: BarChart3 }
];

export default function EmployeeSolutionsPage() {
  return (
    <main>
      <Header />
      <section className="dark-mesh py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Employee Solutions</div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              <span className="bone-text">Hire with clarity from shortlist to offer.</span>
            </h1>
            <p className="mt-6 text-base leading-7 text-mist sm:text-lg sm:leading-8">
              CareerXel gives employers a focused workspace for candidate screening, interview management, and hiring decisions.
            </p>
            <Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6BA3FF]">
              Talk to sales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-line bg-panel p-6">
                <Icon className="h-7 w-7 text-accent" />
                <h2 className="mt-6 text-xl font-semibold tracking-tight">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-mist">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
