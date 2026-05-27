export default {
  register() {},
  async bootstrap({ strapi }) {
    const db = strapi.db.connection;

    const [pricingCount] = await db("pricing").count({ count: "*" });
    if (Number(pricingCount.count) === 0) {
      await db("pricing").insert([
        {
          plan_name: "Free",
          price: "$0",
          features: JSON.stringify(["Resume builder", "5 AI mock interviews", "Daily job matches", "Career roadmap"])
        },
        {
          plan_name: "Plus",
          price: "$9",
          features: JSON.stringify(["Unlimited resumes", "Unlimited AI interviews", "Role coaching", "Salary benchmarks"])
        },
        {
          plan_name: "Growth",
          price: "$39",
          features: JSON.stringify(["10 active jobs", "250 AI screenings", "Bulk applicant actions", "Calendar booking"])
        },
        {
          plan_name: "Campus",
          price: "$11,990",
          features: JSON.stringify(["Unlimited students", "Placement analytics", "Faculty access", "Recruiter network"])
        }
      ]);
    }

    const [blogCount] = await db("blog").count({ count: "*" });
    if (Number(blogCount.count) === 0) {
      await db("blog").insert([
        {
          title: "How AI mock interviews improve placement readiness",
          author: "CareerXel Team",
          content: "A practical guide for turning interview practice into measurable placement outcomes.",
          image_url: null
        },
        {
          title: "What recruiters should track before time-to-hire slips",
          author: "CareerXel Team",
          content: "Pipeline velocity, source mix, and scorecard quality tell the story early.",
          image_url: null
        },
        {
          title: "A placement-cell dashboard that leadership actually reads",
          author: "CareerXel Team",
          content: "Move from anecdotal updates to cohort-level reporting with useful benchmarks.",
          image_url: null
        }
      ]);
    }
  }
};
