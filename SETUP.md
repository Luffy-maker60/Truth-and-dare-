# HeartConnect — Setup Guide 💕

## Prerequisites

- Node.js 18+
- A Supabase account (free tier works perfectly)
- A Vercel account (for deployment)

---

## Step 1: Clone and Install

```bash
git clone <your-repo-url>
cd heartconnect
npm install
```

---

## Step 2: Set Up Supabase

### 2.1 Create Project
1. Go to [supabase.com](https://supabase.com) → New Project
2. Choose a name (e.g. `heartconnect`) and set a strong password
3. Select the region closest to your users (India → `ap-south-1`)

### 2.2 Run Database Schema
1. In Supabase Dashboard → **SQL Editor** → New Query
2. Paste the contents of `supabase/schema.sql`
3. Click **Run** — all tables, policies, and triggers will be created

### 2.3 Configure Auth
1. Go to **Authentication** → **Providers**
2. Enable **Email** provider (on by default)
3. To enable Google OAuth:
   - Go to [console.cloud.google.com](https://console.cloud.google.com)
   - Create OAuth 2.0 credentials
   - Authorized redirect URI: `https://your-project-id.supabase.co/auth/v1/callback`
   - Copy Client ID & Secret into Supabase Auth → Google provider

### 2.4 Get Your Keys
1. Go to **Project Settings** → **API**
2. Copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Step 3: Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your Supabase keys.

---

## Step 4: Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 💕

---

## Step 5: Deploy to Vercel

### 5.1 Push to GitHub
```bash
git init && git add . && git commit -m "Initial HeartConnect"
git remote add origin https://github.com/yourusername/heartconnect.git
git push -u origin main
```

### 5.2 Deploy
1. Go to [vercel.com](https://vercel.com) → Import Project → Select your repo
2. Add environment variables from `.env.local`
3. Deploy!

### 5.3 Update Supabase Redirect URLs
In Supabase → Authentication → URL Configuration:
- Site URL: `https://your-app.vercel.app`
- Redirect URLs: `https://your-app.vercel.app/**`

---

## Features Overview

| Feature | How It Works |
|---|---|
| Private Rooms | 6-char code, invite-only |
| Real-time Chat | Supabase Realtime (WebSockets) |
| Voice Notes | Browser MediaRecorder API → Supabase Storage |
| Message Reactions | JSONB column, real-time updates |
| Typing Indicators | Supabase Broadcast channels |
| Online Presence | Supabase Presence channels |
| 7 Game Modes | 30+ multilingual questions |
| Dark/Light Mode | CSS variables + localStorage |
| 3 Languages | EN / HI / Odia (Roman) |

---

## Tech Stack

```
Frontend: Next.js 14 + React + TypeScript + Tailwind CSS + Framer Motion
Backend:  Supabase (Auth + Database + Realtime + Storage)
Deploy:   Vercel (free tier)
```

---

## Folder Structure

```
heartconnect/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Redirect logic
│   │   ├── layout.tsx            # Root layout + fonts
│   │   ├── globals.css           # Design tokens + utilities
│   │   ├── auth/
│   │   │   ├── login/page.tsx    # Sign in page
│   │   │   └── signup/page.tsx   # Sign up + language select
│   │   ├── dashboard/page.tsx    # Create/join rooms
│   │   └── room/[roomId]/page.tsx # Chat + Games room
│   ├── components/
│   │   ├── chat/ChatPanel.tsx    # Full chat with voice notes
│   │   ├── games/GamesPanel.tsx  # Game selection menu
│   │   ├── games/GameSession.tsx # Interactive question cards
│   │   └── shared/               # Avatar, ThemeToggle, FloatingHearts
│   ├── lib/
│   │   ├── supabase.ts           # Supabase client
│   │   ├── questions.ts          # 30+ multilingual questions
│   │   └── utils.ts              # Helpers + constants
│   ├── locales/index.ts          # EN / HI / Odia translations
│   └── types/index.ts            # TypeScript types
├── supabase/schema.sql           # Full DB schema + RLS + triggers
├── docs/SETUP.md                 # This file
└── .env.example                  # Environment variables template
```

---

## Questions / Support

Built with 💕 for long-distance couples everywhere.
