import { ArrowRight, BarChart3, Bot, BriefcaseBusiness, Building2, Check, GraduationCap, Search, Sparkles, UserRound } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductMock } from "@/components/ProductMock";
import { SectionRibbon } from "@/components/SectionRibbon";
import { getBlogs, getPricing } from "@/lib/cms";

const audiences = [
  { title: "Candidates", icon: UserRound, text: "AI resumes, mock interviews, role matching, and personalized roadmaps." },
  { title: "Employers", icon: BriefcaseBusiness, text: "Full-stack ATS with scorecards, scheduling, screening, and analytics." },
  { title: "Colleges", icon: GraduationCap, text: "Placement dashboards, cohort readiness, and recruiter-facing reports." },
  { title: "AI Engine", icon: Bot, text: "Structured scoring, explainability, multilingual practice, and hire recommendations." }
];

const features = [
  { title: "AI Mock Interviews", tag: "/INTERVIEW", text: "Role-aware practice sessions with scoring across technical and communication dimensions.", icon: Bot },
  { title: "Recruiter ATS", tag: "/PIPELINE", text: "Stages, slots, calendars, scorecards, and every applicant in context.", icon: BriefcaseBusiness },
  { title: "Resume Builder", tag: "/RESUME", text: "Adaptive resumes that retune for each role and skill cluster.", icon: Sparkles },
  { title: "Job Search", tag: "/DISCOVERY", text: "Full-text search with smart matching beyond surface keywords.", icon: Search },
  { title: "Placement Analytics", tag: "/ANALYTICS", text: "Real numbers per college, cohort, source, and hiring period.", icon: BarChart3 },
  { title: "Institution Network", tag: "/CAMPUS", text: "College groups and recruiters share clean, permissioned placement data.", icon: Building2 }
];

export default async function Home() {
  const [plans, blogs] = await Promise.all([getPricing(), getBlogs()]);
  const testimonials = blogs.slice(0, 3).map((post) => ({
    quote: post.excerpt,
    name: post.author || "CareerXel Team",
    role: `${post.category} resource`
  }));

  return (
    <main>
      <Header />

      <section id="overview" className="dark-mesh overflow-hidden py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionRibbon index="S00" name="Overview" note="careerxel.com - 2026" />
          <div className="grid items-center gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            <div>
              <div className="font-serif text-lg italic text-mist">A career platform, reimagined.</div>
              <div className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">AI-native career platform</div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl lg:text-8xl">
                <span className="bone-text">Hire smarter.</span>
                <br />
                <span className="font-normal text-mist">Grow faster.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-mist sm:mt-7 sm:text-lg sm:leading-8">
                One platform for candidates, employers, and colleges with AI mock interviews, a full-stack ATS, and placement analytics that actually move the needle.
              </p>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6BA3FF] sm:w-auto">
                  Start free <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#pricing" className="inline-flex w-full justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto">
                  Book a demo
                </a>
              </div>
              <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-mist sm:grid-cols-4">
                {["10K+ Jobs", "50K+ Candidates", "200+ Colleges", "7 Languages"].map((stat) => (
                  <span key={stat}><b className="text-accent">{stat.split(" ")[0]}</b> {stat.split(" ").slice(1).join(" ")}</span>
                ))}
              </div>
            </div>
            <ProductMock />
          </div>
        </div>
      </section>

      <section id="solutions" className="light bg-paper py-14 text-ink sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionRibbon index="S01" name="Solutions" note="four audiences - one system" light />
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Built for the whole hiring loop,
            <br />
            <span className="font-normal text-ink/60">not one isolated workflow.</span>
          </h2>
          <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map(({ title, icon: Icon, text }) => (
              <div key={title} className="flex h-full flex-col rounded-2xl border border-[#DCE2EE] bg-cloud p-6">
                <Icon className="h-7 w-7 text-accentDark" />
                <h3 className="mt-8 text-2xl font-medium tracking-tight">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="dark-mesh py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionRibbon index="S02" name="Product" note="from first click to final hire" />
          <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Everything from matching
              <br />
              <span className="font-normal text-mist">to measurable placement.</span>
            </h2>
            <p className="max-w-sm text-sm leading-6 text-mist">
              The original design used dense product cards and live UI fragments. This version keeps that operational, dashboard-first feel in Tailwind.
            </p>
          </div>
          <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, tag, text, icon: Icon }) => (
              <div key={title} className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6 transition hover:-translate-y-0.5 hover:border-accent/60 hover:bg-[#2C3450]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 text-xl font-medium tracking-tight">{title}</h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-mist">{text}</p>
                <div className="mt-auto inline-flex w-fit rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mist">{tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-navy py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionRibbon index="S03" name="Pricing" note="from Strapi collection: pricings" />
          <div className="text-center">
            <div className="font-serif text-lg italic text-mist">No surprises. Ever.</div>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              <span className="bone-text">Pay for what you ship,</span>
              <br />
              <span className="font-normal text-mist">not what you might.</span>
            </h2>
          </div>
          <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.id} className={`flex h-full flex-col rounded-2xl border p-6 ${plan.highlighted ? "border-accent/50 bg-[#1E3252]" : "border-line bg-panel"}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist">{plan.name}</div>
                  {plan.badge ? <span className="rounded-full border border-accent/40 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-accent">{plan.badge}</span> : null}
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-light tracking-tight">{plan.price}</span>
                  <span className="ml-2 text-sm text-mist">{plan.cadence}</span>
                </div>
                <p className="mt-4 min-h-16 text-sm leading-6 text-mist">{plan.description}</p>
                <a href="https://careerxel.com/register" className={`mt-auto block rounded-lg px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] ${plan.highlighted ? "bg-accent text-white" : "border border-line text-white"}`}>
                  Start now
                </a>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <ul className="grid gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-white/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="dark-mesh py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Testimonials</div>
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            What users learn from
            <br />
            <span className="font-normal text-mist">CareerXel features and resources.</span>
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={`${item.name}-${item.quote}`} className="rounded-lg border border-line bg-panel p-6">
                <p className="text-sm leading-6 text-white/90">
                  <span aria-hidden="true">&quot;</span>
                  {item.quote}
                  <span aria-hidden="true">&quot;</span>
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="text-sm font-semibold text-white">{item.name}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mist">{item.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="light bg-paper py-14 text-ink sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionRibbon index="S04" name="Resources" note="from Strapi collection: blogs" light />
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Field notes for careers,
            <br />
            <span className="font-normal text-ink/60">hiring, and placements.</span>
          </h2>
          <div className="mt-10 grid items-stretch gap-4 md:grid-cols-3">
            {blogs.map((post) => (
              <article key={post.id} className="h-full rounded-2xl border border-[#DCE2EE] bg-cloud p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accentDark">{post.category} - {post.readTime}</div>
                <h3 className="mt-5 text-2xl font-medium leading-tight tracking-tight">{post.title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/65">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section id="contact" className="cta-mesh py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <SectionRibbon index="S05" name="Contact" note="posts to Strapi collection: contacts" />
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="bone-text">Get started in minutes.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-mist sm:text-lg sm:leading-8">
            Create your account today, or send a sales note into Strapi using the contact collection.
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
