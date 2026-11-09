# InLens

**Filter the noise. Amplify user truth.**

InLens turns user interviews into decisions. Upload a transcript, document or call recording; InLens hides personal details, finds pain points and feature requests, groups them into themes across interviews with word-for-word quotes, and drafts an email digest for your team. It reads Hinglish code-switching and keeps quotes as spoken.

Built for startup PMs, UX researchers and founders who run their own interviews.

**Live app:** https://inlensbyrohitkumawat-tan.vercel.app

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkuro7109%2Finlens&project-name=inlens&repository-name=inlens&env=ANTHROPIC_API_KEY&envDescription=Anthropic%20API%20key%20for%20analysis%20and%20chat%20(stays%20on%20the%20server)&envLink=https%3A%2F%2Fconsole.anthropic.com%2Fsettings%2Fkeys)

## What's inside

| Path | What it is |
| --- | --- |
| `index.html` | The whole app: one responsive page. Phones get a bottom tab bar, desktops get a collapsible sidebar. |
| `api/analyze.js` | Analyses one interview, or regroups a project's themes (Claude) |
| `api/chat.js` | "Ask InLens" answers about a project (Claude) |
| `api/transcribe.js` | Optional: transcribes audio uploads (OpenAI Whisper) |
| `api/status.js` | Tells the app whether AI and transcription are switched on |
| `api/_prompts.js` | Prompt templates, shared with `src/app.js` |
| `src/` | Editable sources: `a.html` (styles + markup), `data.js` (sample project), `app.js` (logic) |
| `scripts/bundle.mjs` | Rebuilds `index.html` from `src/` and embeds the mascot images |
| `assets/` | Mascot poses and app icons |

## Features

- **Accounts and onboarding:** sign up, log in, or explore with sample data; a 4-step onboarding (role, conversations you analyse, interview languages, digest email) with multi-select chips and write-your-own answers, all editable later in Profile.
- **Add interview:** paste text, upload `.txt`, `.docx`, `.pdf`, `.vtt` or `.srt`, or upload audio (on the deployed site). Two sample transcripts are one tap away, including a Hinglish one.
- **Agent pipeline you can watch:** read → protect privacy → find pain points and requests → check quotes and emotion → group into themes → prepare the digest.
- **Explainable insights:** every quote is matched to its transcript line; unmatched quotes are flagged and their confidence drops. "View in transcript" jumps to the highlighted line.
- **Human in the loop:** edit, verify or remove any theme or insight; regroup themes on demand.
- **Requests, search and digest:** feature requests ranked by how many participants asked; search across every project; an email digest you can open in your mail app or copy.
- **Ask InLens:** chat about a project's themes and quotes. It never reveals participant details.
- **Private by default:** phone numbers, emails, card, Aadhaar-style and PAN numbers become `[REDACTED]` before anything reaches the AI. Data stays in the browser; export or delete it any time.
- **Sample data to explore:** four projects come pre-loaded. *Flatmate finder* has 5 interviews (2 in Hinglish), 6 themes, 8 request groups and a starter chat; *Bill payments* is a fintech drop-off study with 3 interviews; *Study planner* is an EdTech sign-up usability test with 2 sessions; *Q1 churn calls* is empty and ready for real interviews. Three more try-it transcripts sit on the Add interview screen. Every participant is fictional, and every sample quote is checked against its transcript (`scripts/check-data.js`).
- **Works offline too:** without an AI key, a built-in analyser drafts the insights and the status pill says so.
- **Feel:** light and dark themes, haptics on every tap (8 ms primary, 4 ms secondary, 16 ms success), ripple from the touch point, pressable buttons, page and list motion, and no motion under reduced-motion settings.

## Deploy on Vercel

1. Click **Deploy with Vercel** above, or go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → `kuro7109/inlens`.
2. Framework Preset: **Other**. No build command or output directory is needed.
3. Environment variables:
   - `ANTHROPIC_API_KEY`: required for AI analysis, theme grouping and chat.
   - `OPENAI_API_KEY`: optional, turns on audio transcription (Whisper).
   - Optional: `ANTHROPIC_MODEL` (default `claude-sonnet-5-5`), `ANTHROPIC_CHAT_MODEL` (default `claude-haiku-5-5`).
4. Deploy. Every push to `main` redeploys.

If you add keys after the first deploy, redeploy so the functions pick them up. The status pill shows **AI · Claude** when the functions answer.

### Keeping keys safe

- Keys live only in Vercel's environment variables. They're never in the HTML or sent to the browser.
- The functions only accept requests from the same site (add more with `ALLOWED_ORIGINS`), validate sizes, and keep the prompts on the server; the browser only sends data.
- Transcripts are redacted in the browser before they're sent.
- Set a monthly spend limit on your Anthropic and OpenAI accounts.

## GitHub Pages (static only)

Settings → Pages → Deploy from branch → `main` / root. The app runs fully with the built-in analyser; AI features need Vercel.

## Local development

```bash
npm i -g vercel
cp .env.example .env.local   # add your keys
vercel dev                   # http://localhost:3000
```

After editing anything in `src/`, run `npm run bundle` and commit `index.html` too.

## Credits

Mascot art by @aokulova, used with permission.
