import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogForm } from "@/components/BlogForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NewBlogPage() {
  return (
    <main>
      <Header />
      <section className="dark-mesh py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <Link href="/" className="mb-8 inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Blog</div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              <span className="bone-text">Post a new CareerXel blog.</span>
            </h1>
            <p className="mt-6 text-base leading-7 text-mist sm:text-lg sm:leading-8">
              Add a resource article and store it in the backend blog table through Strapi.
            </p>
          </div>
          <BlogForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
