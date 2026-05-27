"use client";

import { useState } from "react";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export function ContactForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || "")
    };

    const response = await fetch(`${STRAPI_URL}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    });

    if (!response.ok) {
      setError("Could not send your details. Please check Strapi and MySQL are running.");
      setIsSubmitting(false);
      return;
    }

    form.reset();
    window.location.href = `${STRAPI_URL}/admin/content-manager/collection-types/api::contact.contact`;
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-2xl gap-3 rounded-2xl border border-line bg-panel/70 p-4 text-left backdrop-blur">
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="min-w-0 rounded-lg border border-line bg-navy px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-2" name="name" placeholder="Name" required />
        <input className="min-w-0 rounded-lg border border-line bg-navy px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-2" name="email" placeholder="Email" type="email" required />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="min-w-0 rounded-lg border border-line bg-navy px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-2" name="phone" placeholder="Contact number" type="tel" />
        <input className="min-w-0 rounded-lg border border-line bg-navy px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-2" name="company" placeholder="Company or college" />
      </div>
      <textarea className="min-h-28 min-w-0 rounded-lg border border-line bg-navy px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-2" name="message" placeholder="Tell us what you want to build" required />
      {error ? <p className="text-sm text-red-200">{error}</p> : null}
      {success ? <p className="text-sm text-green-200">Thanks! Your message has been sent.</p> : null}
      <button className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6BA3FF] disabled:cursor-wait disabled:opacity-70" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
