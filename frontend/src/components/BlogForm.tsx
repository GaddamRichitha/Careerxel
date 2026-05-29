"use client";

import { useState } from "react";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export function BlogForm() {
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
      title: String(formData.get("title") || "").trim(),
      author: String(formData.get("author") || "").trim() || "CareerXel Team",
      content: String(formData.get("content") || "").trim(),
      imageUrl: String(formData.get("imageUrl") || "").trim()
    };

    const response = await fetch(`${STRAPI_URL}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    });

    setIsSubmitting(false);

    if (!response.ok) {
      setError("Could not post the blog. Please check that Strapi and MySQL are running.");
      return;
    }

    form.reset();
    setSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid max-w-3xl gap-3 rounded-lg border border-line bg-panel/70 p-4 text-left backdrop-blur">
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="min-w-0 rounded-lg border border-line bg-navy px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-2" name="title" placeholder="Blog title" required />
        <input className="min-w-0 rounded-lg border border-line bg-navy px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-2" name="author" placeholder="Author" />
      </div>
      <input className="min-w-0 rounded-lg border border-line bg-navy px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-2" name="imageUrl" placeholder="Image URL" type="url" />
      <textarea className="min-h-56 min-w-0 rounded-lg border border-line bg-navy px-4 py-3 text-sm outline-none ring-accent/40 focus:ring-2" name="content" placeholder="Write the blog content" required />
      {error ? <p className="text-sm text-red-200">{error}</p> : null}
      {success ? <p className="text-sm text-green-200">Blog posted successfully.</p> : null}
      <button className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6BA3FF] disabled:cursor-wait disabled:opacity-70" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Posting..." : "Post blog"}
      </button>
    </form>
  );
}
