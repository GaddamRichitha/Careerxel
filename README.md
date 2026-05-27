# CareerXel Next.js + Strapi + MySQL

This workspace recreates the provided CareerXel static site as a modern stack:

- `frontend`: Next.js App Router with Tailwind CSS
- `backend`: Strapi headless CMS
- Database: MySQL, with collection types for `pricing`, `contact`, and `blog`

## Run Locally

1. Create a MySQL database named `careerxel`.
2. Copy the env examples:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.local.example frontend/.env.local
```

3. Install dependencies:

```bash
npm install
```

4. Start both apps:

```bash
npm run dev
```

Frontend: `http://127.0.0.1:3000`

Strapi admin/API: `http://127.0.0.1:1337`

## Strapi Content Types

Strapi creates database tables from the content-type schemas:

- `pricings`
- `contacts`
- `blogs`

The frontend includes fallback content, so it renders before CMS records are added.
