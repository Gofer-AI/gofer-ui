# Gofer AI - Frontend UI

> Building the Cognitive Layer Between Human Skill & Robotic Execution

A web interface for robotics researchers to search demonstration videos and process them through the Real2Render2Real (R2R2R) pipeline for robot policy training.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg)](https://vitejs.dev/)

## Overview

Gofer AI bridges the gap between human demonstrations and robotic execution. This frontend interface allows researchers to:

1. **Upload & Index** demonstration videos
2. **Search** for specific actions using natural language
3. **Retrieve** relevant video clips
4. **Process** through R2R2R pipeline for robotics training

The R2R2R (Real2Render2Real) workflow eliminates the need for physical robot hardware by reconstructing motion from video, generating 3D assets, and training robot policies in simulation.

## Key Features

### Semantic Video Search
- Natural language queries (e.g., "person reaching for cup", "grasping a bottle")
- Vector-based similarity search across indexed videos
- Timestamp navigation to exact moments
- Preview video clips before processing

### R2R2R Pipeline Integration
- Upload demonstration videos
- Process selected clips through R2R2R
- Download processed outputs:
  - **Video (MP4)** - Reconstructed motion
  - **HDF5/JSON** - Robot training data

### Video Management
- Upload videos with real-time progress (SSE)
- Support for multiple formats (.mp4, .avi, .mov, .mkv, .webm)
- AI-powered analysis for action primitive detection
- Temporal windowing for detailed scene understanding

### Authentication
- Firebase-based demo access
- Protected routes for authenticated users
- Session management

### Contact Form & Email Notifications
- Contact form at `/contact` route
- Firebase Cloud Functions for email automation
- Resend integration for email delivery
- Admin notifications sent to contact@goferai.space
- User confirmation emails
- Rate limiting (3 requests/hour per email)
- XSS protection and input sanitization

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | React | 19.2 |
| **Language** | TypeScript | 5.9 |
| **Build** | Vite | 5.4 |
| **Styling** | Tailwind CSS | 3.4 |
| **State** | Context API + React Query | 5.90 |
| **Routing** | React Router | 7.13 |
| **Auth** | Firebase | 12.9 |

## Getting Started

### Prerequisites

- Node.js 20.11.0+
- npm 10.2.4+
- Compatible backend API (provides video search & R2R2R processing)

### Installation

```bash
git clone https://github.com/yourusername/gofer-ui.git
cd gofer-ui
npm install
```

### Configuration

Create `.env` file:

```bash
# Backend API URL
VITE_API_BASE_URL=http://localhost:8000

# Firebase (for demo authentication)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Run

```bash
# Development
npm run dev

# Production build
npm run build
npm run preview
```

## Workflow

### 1. Upload Mode

```
Upload Video → AI Analysis → Index for Search
```

- Upload demonstration videos
- AI detects action primitives and objects
- Videos indexed in vector database
- Real-time processing status via SSE

### 2. Search Mode

```
Query → Search Results → Select → R2R2R → Download
```

**Example workflow:**
1. Enter query: "person grasping a cup"
2. Review search results with similarity scores
3. Preview video at specific timestamps
4. Select video for R2R2R processing
5. Download MP4 + HDF5 data for robot training

## Project Structure

```
gofer-ui/
├── src/
│   ├── api/
│   │   └── client.ts             # All backend API calls
│   ├── components/
│   │   ├── LabLabDemo.tsx       # Main UI (upload/search)
│   │   ├── ProcessingStatus.tsx # Real-time SSE status
│   │   ├── ErrorBoundary.tsx    # Error handling
│   │   └── ...
│   ├── context/                  # State management
│   │   ├── AppContext.tsx       # App mode, errors
│   │   ├── VideoContext.tsx     # Upload, analysis
│   │   └── SearchContext.tsx    # Search, results
│   ├── lib/
│   │   ├── auth.ts              # Firebase auth
│   │   └── firebase.ts
│   ├── pages/
│   │   ├── Landing.tsx          # Public page
│   │   └── Login.tsx            # Demo access
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   ├── constants.ts              # Config values
│   ├── AppRouter.tsx             # Routes + providers
│   └── main.tsx
└── ...
```

## Architecture

### State Management

```
ErrorBoundary
└─ QueryClientProvider (React Query - API state)
   └─ AppProvider (UI mode)
      └─ VideoProvider (video state)
         └─ SearchProvider (search state)
            └─ Router
```

**Context Hooks:**

```typescript
// App state
import { useApp } from './context';
const { mode, setMode, error, setError } = useApp();

// Video state
import { useVideo } from './context';
const { videoFile, videoId, analysisResult } = useVideo();

// Search state
import { useSearch } from './context';
const { query, searchResults, selectedResult } = useSearch();
```

### API Functions

Located in `src/api/client.ts`:

```typescript
// Upload & Analysis
uploadVideoLabLab(file)           // Upload video
analyzeVideo(videoId, task)       // AI analysis

// Search
semanticSearch(query, top_k)      // Find relevant videos

// R2R2R Processing
processR2R2R(file)                // Process for robotics

// Downloads
getVideoDownloadUrl(videoId)      // Get video file
getHDFDownloadUrl(videoId)        // Get training data
```

## Backend API Requirements

The UI expects these endpoints:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/upload_video` | Upload demonstration video |
| POST | `/analyze_video?video_id=...` | Analyze with AI |
| POST | `/search_videos` | Semantic search |
| POST | `/r2r2r` | R2R2R processing |
| GET | `/download/video/{id}` | Download processed video |
| GET | `/download/hdf/{id}` | Download robot data |
| GET | `/videos/{jobId}/status/stream` | SSE processing status |
| GET | `/` | Health check |

## Development

### Adding Features

1. Define types in `src/types/index.ts`
2. Add constants to `src/constants.ts`
3. Create API functions in `src/api/client.ts`
4. Build UI components with JSDoc
5. Update context if needed

### Code Style

- TypeScript strict mode
- JSDoc comments for all functions
- Constants over magic strings
- Functional components with hooks

### Constants Configuration

All config in `src/constants.ts`:

```typescript
export const API_TIMEOUTS = {
  UPLOAD: 5 * 60 * 1000,      // 5 min
  ANALYSIS: 10 * 60 * 1000,   // 10 min
  HEALTH_CHECK: 5 * 1000,     // 5 sec
};

export const UI = {
  MAX_FILE_SIZE_MB: 500,
  SUPPORTED_VIDEO_FORMATS: ['.mp4', '.avi', '.mov', '.mkv', '.webm'],
};
```

## Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m 'feat: add feature'`
4. Push: `git push origin feature/my-feature`
5. Open Pull Request

### Commit Convention

```
feat: Add new feature
fix: Fix bug
docs: Update docs
refactor: Refactor code
test: Add tests
```

## Troubleshooting

### Cannot Connect to API

- Check `VITE_API_BASE_URL` in `.env`
- Verify backend is running
- Check CORS configuration

### Upload Fails

- Verify file size < 500MB
- Check format is supported
- Inspect browser Network tab

### Search Returns No Results

- Ensure videos are indexed
- Check backend logs
- Verify vector database is populated

### R2R2R Processing Timeout

- Large videos may need longer timeout
- Adjust `API_TIMEOUTS.ANALYSIS` in `constants.ts`

## Contact Form Deployment

### Prerequisites
- Firebase CLI installed: `npm install -g firebase-tools`
- Resend account (free tier: 100 emails/day)
- ImprovMX email forwarding configured

### Deploy Steps

**1. Install function dependencies:**
```bash
cd functions
npm install
```

**2. Deploy Firestore rules:**
```bash
firebase deploy --only firestore:rules
```

**3. Set environment secrets:**
```bash
# Resend API key
firebase functions:secrets:set RESEND_API_KEY

# Your email (registered with Resend)
firebase functions:secrets:set FROM_EMAIL
```

**4. Build and deploy Cloud Functions:**
```bash
cd functions
npm run build
cd ..
firebase deploy --only functions
```

**5. Test:**
- Visit `/contact` page
- Submit test message
- Verify emails received

### Email Flow
```
User submits form → Firestore → Cloud Function triggered
                                      ↓
                            Resend sends 2 emails:
                            1. Admin: contact@goferai.space
                            2. User: confirmation email
```

### Monitoring
```bash
# Watch logs
firebase functions:log --only sendContactEmails --follow

# Check Resend dashboard
https://resend.com/emails
```

### Security

**Frontend (.env) - Safe to expose:**
- `VITE_*` variables are public (bundled in frontend)
- Firebase config is NOT a secret (security = Firestore rules)

**Backend (Firebase Secrets) - NEVER expose:**
- `RESEND_API_KEY` - Only in Firebase Functions
- `FROM_EMAIL` - Only in Firebase Functions

**Firestore Rules:**
- Users can only CREATE contact requests
- Users cannot READ any requests (including their own)
- Only admins can read/update/delete

**Protection Features:**
- [ACTIVE] Rate limiting (3 requests/hour per email)
- [ACTIVE] XSS sanitization (strips HTML tags)
- [ACTIVE] Email validation (format + typo detection)
- [ACTIVE] Input length limits (max 5000 chars)
- [ACTIVE] API keys secured in Cloud Functions

**Network Tab Check:**
- [SAFE] Should see: Firestore requests with form data
- [DANGER] Should NOT see: RESEND_API_KEY, FROM_EMAIL, service account keys

---

## Deploying to Vercel

### 1. Push to GitHub

```bash
# Ensure .env is not tracked
git status | grep .env  # Should return nothing

# If .env appears, remove it:
git rm --cached .env

# Commit and push
git add .
git commit -m "feat: add contact form with email notifications"
git push origin feature-2
```

### 2. Connect to Vercel

1. Go to https://vercel.com
2. Click **Add New Project**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### 3. Set Environment Variables in Vercel

In **Vercel Dashboard → Settings → Environment Variables**, add:

```
VITE_API_BASE_URL=http://155.138.214.77:8001
VITE_FIREBASE_API_KEY=AIzaSyDBwxXmbt1lE00C1Z5RJhnuPszpSNUiiZM
VITE_FIREBASE_AUTH_DOMAIN=goferai-f2ecd.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=goferai-f2ecd
VITE_FIREBASE_STORAGE_BUCKET=goferai-f2ecd.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=978500514733
VITE_FIREBASE_APP_ID=1:978500514733:web:d539d9f1c3bd3c1382e724
VITE_FIREBASE_MEASUREMENT_ID=G-7LZVBQ8950
```

**Important:** Do NOT add RESEND_API_KEY or FROM_EMAIL to Vercel (backend only).

### 4. Deploy

Click **Deploy** - Vercel will build and deploy automatically.

### 5. Update Domain (Optional)

If using custom domain from Vercel:
1. Go to Vercel project → Settings → Domains
2. Add `goferai.space`
3. Update DNS records as shown

### 6. Test Production

After deployment:
- Visit your Vercel URL (e.g., `gofer-ui.vercel.app`)
- Test contact form at `/contact`
- Verify emails are sent
- Check Network tab for security

---

## Use Cases

### Robot Imitation Learning

1. Upload human demonstration videos
2. Search: "pick up object from table"
3. Select best demonstrations
4. Process through R2R2R
5. Train robot policy with generated data

### Dataset Curation

1. Index large video corpus
2. Query: "grasping cylindrical objects"
3. Collect relevant clips
4. Export for model training

### Motion Analysis

1. Upload task videos
2. AI analyzes action primitives
3. Review temporal windows
4. Extract motion data

---

**For backend setup, see backend repository.**

**For development notes, see `CLAUDE.md`.**
