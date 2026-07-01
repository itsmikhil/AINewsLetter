# WeeklyBrief 📰

> Stay updated with AI without reading hundreds of articles.

WeeklyBrief is an AI-powered newsletter platform that automatically collects AI news from trusted sources, identifies the five most important stories of the week using an LLM, generates concise summaries, and delivers them directly to subscribers' inboxes.

**Live Website:** https://weeklybrief.in

---

## ✨ Features

- 📰 Aggregates AI news from multiple trusted RSS feeds
- 🤖 Uses Mistral AI to identify the Top 5 most important stories
- ✍️ Generates AI-powered summaries and "Why It Matters" sections
- 📧 Weekly email newsletter delivery
- ✅ Email verification before subscription
- 🚫 One-click unsubscribe support
- 📚 Browse previous newsletters
- 🔍 Browse all collected articles
- 📱 Fully responsive frontend

---

# Live Preview

<img width="1520" height="699" alt="image" src="https://github.com/user-attachments/assets/0c65b46e-0f76-4c9a-89b2-aee43a6a69d5" />

<img width="1920" height="4561" alt="image" src="https://github.com/user-attachments/assets/9441d643-650b-476d-ac08-f9840fb1c37b" />



# Tech Stack

## Frontend

- React
- TanStack Start
- TypeScript
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## AI

- Mistral API

## Email

- Resend

## News Aggregation

- rss-parser

## Deployment

- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas

---

# System Architecture

```
                RSS Feeds
                     │
                     ▼
              rss-parser
                     │
                     ▼
          Normalize Article Data
                     │
                     ▼
               MongoDB Atlas
                     │
                     ▼
              Mistral AI
       Select Top 5 Articles
       Generate Summaries
      Generate "Why It Matters"
                     │
                     ▼
           Newsletter Document
                     │
                     ▼
                Resend API
                     │
                     ▼
               Subscribers
```

---

# Workflow

## Daily Pipeline

- Fetch articles from AI RSS feeds
- Normalize article structure
- Remove duplicates
- Store in MongoDB

---

## Weekly Pipeline

- Retrieve articles from the previous week
- Use Mistral AI to select the Top 5 stories
- Generate:
  - Weekly Summary
  - AI Summary
  - Why It Matters
- Store newsletter
- Send newsletter to verified subscribers

---

# Folder Structure

```
AINewsLetter
│
├── Backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── schedulers
│   ├── services
│   ├── utils
│   └── server.js
│
├── Frontend
│   ├── src
│   ├── public
│   └── vite.config.ts
│
└── README.md
```

---

# API Endpoints

## Articles

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/article/all` | Get all articles |
| GET | `/api/article/get/:id` | Get article details |

---

## Newsletter

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/newsletter/latest` | Latest newsletter |
| GET | `/api/newsletter/all` | All newsletters |
| GET | `/api/newsletter/:id` | Newsletter details |

---

## Subscriber

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/subscriber/register` | Subscribe |
| GET | `/api/subscriber/verify/:token` | Verify email |
| GET | `/api/subscriber/unsubscribe/:token` | Unsubscribe |

---

# Key Design Decisions

### RSS instead of Web Scraping

RSS feeds are official, lightweight, and more reliable than scraping HTML pages.

---

### Mistral AI for Ranking

Instead of relying on keyword matching or manual heuristics, Mistral AI evaluates the importance of each article and selects the most significant stories.

---

### MongoDB

Articles are stored as independent documents, making MongoDB a natural fit without requiring complex relational models.

---

### Resend

Resend provides reliable transactional email delivery, domain verification, and a clean developer experience.

---

# Production Challenges Solved

### Render Free Tier Sleep

The Render free tier automatically spins down after inactivity, preventing in-process schedulers like `node-cron` from running reliably.

**Solution**

- Exposed protected cron endpoints
- Triggered them using an external scheduler
- Added UptimeRobot monitoring to reduce cold-start delays

---

### Duplicate Articles

Duplicate RSS entries are skipped using unique article URLs.

---

### Email Verification

Only verified subscribers receive newsletters.

---

### Secure Unsubscribe

Each subscriber receives a unique unsubscribe token instead of exposing email addresses.

---

# Environment Variables

Backend

```env
PORT=

MONGODB_URI=

MISTRAL_API_KEY=

RESEND_API_KEY=

EMAIL_FROM=

FRONTEND_URL=

BACKEND_URL=

CRON_SECRET=
```

Frontend

```env
VITE_BACKEND_URL=
```

---

# Running Locally

## Backend

```bash
cd Backend

npm install

npm run dev
```

---

## Frontend

```bash
cd Frontend

npm install

npm run dev
```

---

# Future Improvements

- Redis caching
- Queue-based email delivery (BullMQ)
- User topic preferences
- Admin dashboard
- Analytics
- Email open tracking
- Rate limiting
- Docker support
- CI/CD pipeline

---

# Lessons Learned

Building WeeklyBrief involved much more than writing application code. The project required working with:

- RSS feed aggregation
- AI-powered content generation
- Email infrastructure
- Domain & DNS configuration
- SSL certificates
- Deployment on cloud platforms
- Secure authentication for scheduled jobs
- Monitoring and uptime management
- Production debugging

It provided hands-on experience with the complete lifecycle of deploying and maintaining a production-ready web application.

---

## Author

**Mikhil Ailani**

GitHub: https://github.com/itsmikhil

LinkedIn: https://linkedin.com/in/mikhilailani
