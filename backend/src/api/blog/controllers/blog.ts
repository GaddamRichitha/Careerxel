const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const estimateReadTime = (content?: string | null) => {
  const words = (content || "").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min`;
};

export default {
  async find(ctx) {
    const rows = await strapi.db
      .connection("blog")
      .select(["id", "title", "author", "content", "image_url", "created_at"])
      .orderBy("created_at", "desc");

    ctx.body = {
      data: rows.map((row) => {
        const content = row.content || "";
        const excerpt = content.length > 180 ? `${content.slice(0, 177).trim()}...` : content;

        return {
          id: String(row.id),
          title: row.title,
          slug: slugify(row.title),
          excerpt,
          content,
          category: "CareerXel",
          readTime: estimateReadTime(content),
          author: row.author || "CareerXel Team",
          imageUrl: row.image_url,
          publishedAt: row.created_at
        };
      })
    };
  }
};
