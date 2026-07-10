# Moore Tuition website

Full-stack rebuild of the Moore Tuition marketing site, using the same stack as Starview Learning:

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Backend:** .NET 10 Web API (contact form + health)

## Prerequisites

| Tool | Version |
|------|---------|
| [.NET SDK](https://dotnet.microsoft.com/download) | 10.x |
| [Node.js](https://nodejs.org) | 18+ |

## Getting started

You need two processes running — the API and the frontend.

### 1. Start the API

```bash
cd backend/MooreTuition.Api
dotnet run
```

The API starts at **http://localhost:5199**.  
Scalar (interactive API docs) is available at http://localhost:5199/scalar/v1 in development.  
Health check: http://localhost:5199/health

Without SMTP configured, contact submissions are logged to the console so local demos work out of the box.

To send real email, set SMTP via user secrets:

```bash
cd backend/MooreTuition.Api
dotnet user-secrets set "Smtp:Host" "smtp.example.com"
dotnet user-secrets set "Smtp:Port" "587"
dotnet user-secrets set "Smtp:Username" "your-user"
dotnet user-secrets set "Smtp:Password" "your-password"
dotnet user-secrets set "Smtp:FromAddress" "noreply@example.com"
```

### 2. Start the frontend

```bash
cd Frontend
cp .env.local.example .env.local   # first time only (Windows: copy .env.local.example .env.local)
npm install                         # first time only
npm run dev
```

The site starts at **http://localhost:3000**.

## Environment variables

The frontend reads config from `Frontend/.env.local`:

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:5199` | Base URL of the Moore Tuition API |

## Project structure

```
backend/
  MooreTuition.Api/        .NET 10 contact API
  MooreTuition.Api.Tests/  xUnit tests
Frontend/                  Next.js marketing site
```

## Pages

| Route | Content |
|-------|---------|
| `/` | Home |
| `/approach` | Teaching approach |
| `/subjects` | English, Maths, Reasoning |
| `/cv` | Experience & qualifications |
| `/rates` | Session pricing |
| `/faq` | FAQs |
| `/contact` | Contact form (posts to `POST /api/contact`) |
