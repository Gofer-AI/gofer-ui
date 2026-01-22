import { useState, useRef } from 'react';
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import Header from './components/Header';
import VideoUpload from './components/VideoUpload';
import ControlsPanel from './components/ControlsPanel';
import VideoPlayer from './components/VideoPlayer';
import type { VideoPlayerRef } from './components/VideoPlayer';
import ResultsList from './components/ResultsList';
import { searchFrames, getVideoStreamUrl, getVideoClip } from './api/client';
import type { FrameResult } from './types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function AppContent() {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [currentTaskName, setCurrentTaskName] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<FrameResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const videoPlayerRef = useRef<VideoPlayerRef>(null);

  // Search mutation
  const searchMutation = useMutation({
    mutationFn: searchFrames,
    onSuccess: (data) => {
      setSearchResults(data.results);
      setError(null);
    },
    onError: (err) => {
      setError(err instanceof Error ? err.message : 'Search failed');
      setSearchResults([]);
    },
  });

  // Handle video upload success
  const handleUploadSuccess = (jobId: string, taskName: string) => {
    setCurrentVideoId(jobId);
    setCurrentTaskName(taskName);
    setVideoUrl(getVideoStreamUrl(jobId));
    setError(null);
    setSearchResults([]);
  };

  // Handle search
  const handleSearch = (query: string, topK: number) => {
    searchMutation.mutate({
      query,
      video_id: currentVideoId || undefined,
      task_name: currentTaskName || undefined,
      top_k: topK,
    });
  };

  // Handle jump to timestamp - loads clip and seeks
  const handleJumpToTime = async (videoId: string, time: number) => {
    try {
      // Fetch clip info
      const clipInfo = await getVideoClip(videoId, time, 2.0);

      // Update video if different from current
      if (videoId !== currentVideoId) {
        setCurrentVideoId(videoId);
        setVideoUrl(`http://localhost:8000${clipInfo.video_url}`);
      }

      // Seek to exact timestamp after video loads
      setTimeout(() => {
        videoPlayerRef.current?.seekTo(clipInfo.seek_to);
      }, 100);
    } catch (err) {
      setError('Failed to load video clip');
      console.error('Error loading clip:', err);
    }
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
          {/* Left Column - Upload & Controls */}
          <div className="lg:w-96 space-y-6">
            <VideoUpload onUploadSuccess={handleUploadSuccess} />
            <ControlsPanel
              onSearch={handleSearch}
              isSearching={searchMutation.isPending}
              hasVideo={!!currentVideoId}
            />
          </div>

          {/* Right Column - Video & Results */}
          <div className="flex-grow space-y-6">
            {/* Video Player */}
            <VideoPlayer
              ref={videoPlayerRef}
              videoUrl={videoUrl || undefined}
              title={currentTaskName || 'No video loaded'}
            />

            {/* Search Results */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Search Results
                {searchResults.length > 0 && (
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({searchResults.length} frames found)
                  </span>
                )}
              </h2>
              <ResultsList
                results={searchResults}
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
