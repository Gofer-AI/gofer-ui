# Gofer AI - Frontend

Semantic Video Search for Creators

This is the frontend web application for Gofer AI, built for the Imagine Cup submission. It provides a clean, intuitive interface for searching videos using semantic queries powered by Azure AI.

## Features

- **Semantic Video Search**: Search for moments in videos using natural language queries
- **Timestamp Jumping**: Click to jump directly to relevant segments in the video player
- **Demo Mode**: Toggle for reliable demos with a pre-indexed video
- **AI Summaries**: Optional GPT-4o summaries for search results (slower)
- **Copy Timestamps**: Easy one-click copying of segment timestamps
- **Real-time API Status**: Visual indicator of backend connectivity

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **TanStack Query** (React Query) for API state management
- **Azure AI Services** (via backend API)

## Prerequisites

- Node.js 20.11.0 or higher
- npm 10.2.4 or higher
- Backend API running at `http://localhost:8000`

## Installation

```bash
# Install dependencies
npm install
```

## Configuration

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update `.env` if your backend is running on a different URL:
```
VITE_API_BASE_URL=http://localhost:8000
```

3. Update demo video constants in `src/constants.ts`:
```typescript
export const DEMO_VIDEO_ID = "your-video-id"; // Replace with actual ID from backend
```

## Running the Application

### Development Mode

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
gofer-ui/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Header with logo and API status
│   │   ├── ControlsPanel.tsx # Video selector and search controls
│   │   ├── VideoPlayer.tsx  # HTML5 video player with seeking
│   │   ├── ResultsList.tsx  # Search results container
│   │   ├── ResultCard.tsx   # Individual result card
│   │   └── ExampleQueries.tsx # Example query chips
│   ├── api/
│   │   └── client.ts        # API fetch wrappers
│   ├── utils/
│   │   └── time.ts          # Time formatting utilities
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── constants.ts         # App constants and config
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind CSS imports
├── .env.example             # Environment variables template
├── .env                     # Local environment variables
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Usage Guide

### Basic Search Flow

1. **Select a Video**: Choose an indexed video from the dropdown (or enable Demo Mode)
2. **Enter a Query**: Type a natural language search query
3. **Configure Options**:
   - Adjust `top_k` for number of results (1-20)
   - Toggle "Generate AI summaries" if needed
4. **Search**: Click the Search button or press Enter
5. **View Results**: Browse results with thumbnails, scores, and context
6. **Jump to Timestamp**: Click "Jump" to seek the video to that moment
7. **Copy Timestamp**: Click "Copy Timestamp" to copy the time range

### Demo Mode

Enable Demo Mode to use a hardcoded demo video:
- Automatically selects the demo video ID
- Disables the video selector dropdown
- Ensures reliable demos even if indexing isn't complete
- Shows a visual indicator when active

### Example Queries

Try these example queries (available as clickable chips):
- "explain how the AI model works"
- "biggest challenge they faced"
- "showing a product demo on screen"

## API Integration

The frontend communicates with the backend API at `http://localhost:8000`:

### Endpoints Used

1. **GET** `/api/v1/videos` - Fetch indexed videos
2. **POST** `/api/v1/search` - Search videos with semantic queries

### Expected Response Format

**Videos Response:**
```json
{
  "videos": [
    {
      "id": "uuid",
      "title": "Video Title",
      "source_url": "video-url",
      "duration_seconds": 3600,
      "thumbnail_url": "thumbnail-url",
      "status": "indexed",
      "created_at": "2024-01-01T00:00:00Z",
      "segment_count": 24
    }
  ]
}
```

**Search Response:**
```json
{
  "results": [
    {
      "segment_id": "segment-uuid",
      "video_id": "video-uuid",
      "video_title": "Video Title",
      "start_time": 120.5,
      "end_time": 180.0,
      "score": 0.92,
      "thumbnail_url": "thumbnail-url",
      "visual_context": "Description from Azure AI Vision",
      "transcript_snippet": "Optional transcript",
      "ai_summary": "Optional GPT-4o summary"
    }
  ],
  "query_time_ms": 245
}
```

## Troubleshooting

### API Connection Issues

If you see "Unable to connect to API":
1. Ensure the backend is running at `http://localhost:8000`
2. Check that CORS is properly configured in the backend
3. Verify the `VITE_API_BASE_URL` in `.env`

### No Videos Showing

1. Check that videos have been indexed in the backend
2. Ensure videos have `status: "indexed"` (not "processing" or "failed")
3. Try enabling Demo Mode as a fallback

### Video Player Not Working

1. Ensure the video `source_url` is a valid video file URL
2. Check browser console for CORS or network errors
3. Verify the video format is supported by HTML5 video

## Development Notes

### Adding New Features

- Components use functional React with hooks
- API calls are managed with TanStack Query for caching and loading states
- Tailwind CSS for all styling (no custom CSS needed)
- TypeScript types are defined in `src/types/index.ts`

### Code Style

- TypeScript strict mode enabled
- Tailwind CSS utility classes for styling
- ESLint and Prettier recommended for consistency

## Demo Day Checklist

Before Jan 8 demo:

- [ ] Backend is running and indexed demo video
- [ ] Update `DEMO_VIDEO_ID` in `src/constants.ts`
- [ ] Test all example queries
- [ ] Verify timestamp jumping works
- [ ] Check AI summaries toggle
- [ ] Test on demo presentation computer
- [ ] Have backup screenshots/video recording

## License

Proprietary - Gofer AI Imagine Cup Submission

## Support

For issues or questions, contact the Gofer AI team.
