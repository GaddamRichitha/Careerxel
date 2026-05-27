"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseFeatures = (value) => {
    if (!value) {
        return [];
    }
    try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
            return parsed.map(String);
        }
    }
    catch {
        // Fall back to comma/newline separated text from the existing MySQL table.
    }
    return value
        .split(/\r?\n|,/)
        .map((feature) => feature.trim())
        .filter(Boolean);
};
const inferAudience = (planName) => {
    const normalized = planName.toLowerCase();
    if (normalized.includes("campus") || normalized.includes("college")) {
        return "colleges";
    }
    if (normalized.includes("team") || normalized.includes("growth") || normalized.includes("employer")) {
        return "employers";
    }
    return "individuals";
};
exports.default = {
    async find(ctx) {
        const rows = await strapi.db
            .connection("pricing")
            .select(["id", "plan_name", "price", "features", "created_at"])
            .orderBy("id", "asc");
        ctx.body = {
            data: rows.map((row) => ({
                id: String(row.id),
                audience: inferAudience(row.plan_name),
                name: row.plan_name,
                price: row.price,
                cadence: "",
                description: `${row.plan_name} plan for CareerXel users.`,
                highlighted: row.id === 2,
                features: parseFeatures(row.features),
                createdAt: row.created_at
            }))
        };
    }
};
