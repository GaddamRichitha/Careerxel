import { ArrowRight, Bot, BriefcaseBusiness, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const features = [
  { title: "AI Mock Interviews", text: "Practice role-specific interviews with instant scoring and improvement notes.", icon: Bot },
  { title: "Career Roadmaps", text: "Follow guided steps for skills, resumes, applications, and interview readiness.", icon: GraduationCap },
  { title: "Job Matching", text: "Discover opportunities that match your skills, interests, and growth goals.", icon: BriefcaseBusiness }
];

export default function StudentSolutionsPage() {
  return (
    <main>
      <Header />
      <section className="dark-mesh py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Student Solutions</div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              <span className="bone-text">Build confidence before the first interview.</span>
            </h1>
            <p className="mt-6 text-base leading-7 text-mist sm:text-lg sm:leading-8">
              CareerXel helps students prepare, apply, and grow with AI interviews, resume support, and career guidance in one place.
            </p>
            <Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6BA3FF]">
              Get started <ArrowRight className="h-4 w-4" />
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
