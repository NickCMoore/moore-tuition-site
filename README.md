# Moore Tuition website

Next.js marketing site for Moore Tuition (11+ / 13+ tutoring), deployed on Netlify.

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Contact:** Netlify Forms (live site)
- **Backend (optional):** .NET 10 API in `backend/` if you want SMTP later

## Local development

```bash
cd frontend
npm install
npm run dev
```

Site: http://localhost:3000

## Production (Netlify)

- Connected to GitHub `main`
- Base directory: `frontend` (see `netlify.toml`)
- Contact form uses Netlify Forms via `public/__forms.html`

### Turn on form email alerts

1. Netlify → your site → **Forms**
2. Open the **contact** form
3. Notifications / settings → add your email (e.g. moorenickc@protonmail.com)
4. Send a test message from the live Contact page

### Custom domain

1. Netlify → **Domain management** → mooretuition.com
2. Finish nameserver / DNS setup until HTTPS is active
3. Use https://mooretuition.com as the public URL

### Retire the old Wix site

When you are happy with the new site:

1. Unpublish or delete the Wix site, or redirect it to https://mooretuition.com
2. Update Google Business / social links to the new domain

## Project structure

```
frontend/     Next.js site (deploy this)
backend/      Optional .NET contact API
netlify.toml  Netlify build config
```
