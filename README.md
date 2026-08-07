# Vidya – Official KJSIT AI Assistant

**Vidya** is the official AI-powered information chatbot for **K. J. Somaiya Institute of Technology (KJSIT), Sion, Mumbai**. Powered by Google Gemini 3.6 Flash, Vidya assists prospective students, current students, parents, faculty, alumni, and recruiters with instant, accurate answers about admissions, academic programs, fees, scholarships, placement statistics, campus facilities, and institute guidelines.

---

## 🚀 Features

- **Official KJSIT Knowledge Base**: Comprehensive data covering B.Tech, M.Tech, Ph.D. admissions, MHT-CET/JEE Main cutoffs, scholarships, fees, and placements.
- **Multilingual Support**: Supports English, Hindi, and Marathi queries.
- **Interactive Voice & Audio**: Text-to-speech voice responses and speech input capabilities.
- **Admissions Inquiry Form**: Direct lead submission form for prospective applicants.
- **Admin Portal**: Secure portal for KJSIT admissions team to view and manage student lead inquiries.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React, Motion
- **Backend**: Express.js, Node.js, `@google/genai` (Gemini 3.6 Flash SDK)
- **Deployment**: Vercel ready / Docker Cloud Run ready

---

## 📦 Project Setup & Local Development

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- A Google Gemini API Key (Get one from [Google AI Studio](https://aistudio.google.com/))

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/your-username/kjsit-vidya-ai.git
cd kjsit-vidya-ai

# Install dependencies
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Running the Application Locally

```bash
# Start development server (Frontend + Express API)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Vercel

This repository is optimized for one-click deployment on **Vercel**:

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit of KJSIT Vidya AI Assistant"
git branch -M main
git remote add origin https://github.com/your-username/kjsit-vidya-ai.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** -> **Project**.
3. Select your GitHub repository (`kjsit-vidya-ai`).
4. Framework Preset will be automatically detected as **Vite**.

### Step 3: Add Environment Variables in Vercel
In the Vercel project configuration, go to **Environment Variables** and add:
- **Key**: `GEMINI_API_KEY`
- **Value**: `Your Google Gemini API Key`

### Step 4: Deploy
Click **Deploy**. Vercel will build the frontend and serve the Express backend endpoints via `/api/*` serverless functions.

---

## 🔒 License & Ownership

Developed for **K. J. Somaiya Institute of Technology (KJSIT)**. All rights reserved.
