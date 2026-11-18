# TrustTrace AI
An explainable suspicious-message awareness tool built with Next.js. It scans text for possible warning signs, explains evidence, and suggests safer next steps. This is educational and not a definitive fraud detector.


## Run locally
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and optionally add your `GEMINI_API_KEY`.
4. Run `npm run dev` and open http://localhost:3000.

Without a Gemini key, the app uses a local demo scan so you can still test the UI. With a key, the backend calls Gemini 2.5 Flash. Keep the key in server-side environment variables; never put it in frontend code.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, import the repository.
3. Framework preset should detect Next.js automatically.
4. In Project Settings → Environment Variables, add `GEMINI_API_KEY` (optional for demo mode).
5. Deploy. Vercel builds and hosts the frontend and `/api/analyze` route together.
## Disclaimer
Risk scores are heuristic/AI estimates. They may be inaccurate, miss scams, or flag legitimate messages. Verify requests through independent official channels.
