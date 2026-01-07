import { useState, useRef } from 'react';
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import Header from './components/Header';
import ControlsPanel from './components/ControlsPanel';
import VideoPlayer from './components/VideoPlayer';
import type { VideoPlayerRef } from './components/VideoPlayer';
import ResultsList from './components/ResultsList';
import { searchVideos } from './api/client';
import type { SearchResult } from './types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function AppContent() {
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [demoMode, setDemoMode] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [queryTime, setQueryTime] = useState<number | undefined>();
  const [error, setError] = useState<string | null>(null);

  const videoPlayerRef = useRef<VideoPlayerRef>(null);

  // Search mutation
  const searchMutation = useMutation({
    mutationFn: searchVideos,
    onSuccess: (data) => {
      setSearchResults(data.results);
      setQueryTime(data.query_time_ms);
      setError(null);
    },
    onError: (err) => {
      setError(err instanceof Error ? err.message : 'Search failed');
      setSearchResults([]);
    },
  });

  // Handle video upload
  const handleVideoUpload = (file: File) => {
    setUploadedVideo(file);
    // Create a URL for the video to play in the player
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
    setError(null);
  };

  // Handle demo mode toggle
  const handleDemoModeToggle = () => {
    setDemoMode(!demoMode);
    if (!demoMode) {
      setUploadedVideo(null);
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
        setVideoUrl(null);
      }
      setSearchResults([]);
    }
  };

  // Handle search
  const handleSearch = (query: string, topK: number, includeSummary: boolean) => {
    if (!uploadedVideo && !demoMode) {
      setError('Please upload a video first');
      return;
    }

    searchMutation.mutate({
      query,
      video_id: demoMode ? 'demo-video-001' : undefined,
      top_k: topK,
      include_summary: includeSummary,
    });
  };

  // Handle jump to timestamp
  const handleJumpToTime = (time: number) => {
    videoPlayerRef.current?.seekTo(time);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Controls */}
          <ControlsPanel
            onVideoUpload={handleVideoUpload}
            uploadedVideoName={uploadedVideo?.name || null}
            demoMode={demoMode}
            onDemoModeToggle={handleDemoModeToggle}
            onSearch={handleSearch}
            isSearching={searchMutation.isPending}
          />

          {/* Right Column - Video & Results */}
          <div className="flex-grow space-y-6">
            {/* Video Player */}
            <VideoPlayer
              ref={videoPlayerRef}
              videoUrl={videoUrl || undefined}
              title={uploadedVideo?.name}
            />

            {/* Search Results */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Search Results</h2>
              <ResultsList
                results={searchResults}
                queryTime={queryTime}
                onJumpToTime={handleJumpToTime}
                isLoading={searchMutation.isPending}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
