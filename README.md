# OurMemory - Frontend-first Love Memory App

## 1) Project structure
- `src/app/page.tsx`: Home memory list/timeline entry.
- `src/app/memories/[slug]/page.tsx`: Memory detail renderer.
- `src/app/admin/templates/page.tsx`: Template manager with live preview.
- `src/app/api/templates/route.ts`: templates CRUD entry endpoint.
- `src/app/api/memories/route.ts`: memories CRUD entry endpoint.
- `src/components/template-engine/TemplateRenderer.tsx`: code -> component mapper.
- `src/components/templates/*`: 15 template components + shared base.
- `prisma/schema.prisma`: PostgreSQL schema.
- `scripts/seed.ts`: seed 15 template definitions.

## 2) Local run
1. `npm install`
2. Create `.env`
   - `DATABASE_URL=postgresql://...`
   - `NEXTAUTH_SECRET=...`
   - `NEXTAUTH_URL=http://localhost:3000`
   - `CLOUDINARY_CLOUD_NAME=...`
   - `CLOUDINARY_API_KEY=...`
   - `CLOUDINARY_API_SECRET=...`
3. `npx prisma migrate dev --name init`
4. `npm run seed`
5. `npm run dev`

## 3) Manual test checklist
- Home render: `/`
- Memory detail render by template: `/memories/our-first-date`
- Admin template preview switching: `/admin/templates`
- API check: `GET /api/templates`, `GET /api/memories`

## 4) Basic automated checks
- `npx prisma validate`
- `npm run lint`
