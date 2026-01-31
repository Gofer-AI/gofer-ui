import { useState, useRef } from 'react';
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import Header from './components/Header';
import VideoUpload from './components/VideoUpload';
import ProcessingStatus from './components/ProcessingStatus';
import ControlsPanel from './components/ControlsPanel';
import VideoPlayer from './components/VideoPlayer';
import type { VideoPlayerRef } from './components/VideoPlayer';
import ResultsList from './components/ResultsList';
import FreeMoCapBatchProcessor from './components/FreeMoCapBatchProcessor';
import { searchFrames, getVideoStreamUrl, getVideoClip } from './api/client';
import type { FrameResult, ClipRequest } from './types';
import { API_BASE_URL } from './constants';

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
  const [processingJobId, setProcessingJobId] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // FreeMoCap selection state
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedClipIds, setSelectedClipIds] = useState<Set<string>>(new Set());

  const videoPlayerRef = useRef<VideoPlayerRef>(null);

  // Search mutation
  const searchMutation = useMutation({
    mutationFn: searchFrames,
    onSuccess: (data) => {
      setSearchResults(data.results);
      setHasSearched(true);
      setError(null);
    },
    onError: (err) => {
      setError(err instanceof Error ? err.message : 'Search failed');
      setSearchResults([]);
      setHasSearched(true);
    },
  });

  // Handle video upload success - start showing processing status
  const handleUploadSuccess = (jobId: string, taskName: string) => {
    setProcessingJobId(jobId);
    setCurrentTaskName(taskName);
    setError(null);
    setSearchResults([]);
    setHasSearched(false); // Reset search state for new video
  };

  // Handle processing complete - show video and enable search
  const handleProcessingComplete = (videoId: string) => {
    setCurrentVideoId(videoId);
    setVideoUrl(getVideoStreamUrl(videoId));
    setProcessingJobId(null); // Hide processing status

    // Automatically trigger a search with the task name to show results immediately
    if (currentTaskName) {
      // Small delay to ensure ChromaDB is fully ready
      setTimeout(() => {
        searchMutation.mutate({
          query: currentTaskName.replace(/_/g, ' '), // Convert "pick_up_cup" to "pick up cup"
          video_id: videoId,
          top_k: 5,
        });
      }, 500);
    }
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
        // Remove /api/v1 from API_BASE_URL for video stream endpoint
        const baseUrl = API_BASE_URL.replace('/api/v1', '');
        setVideoUrl(`${baseUrl}${clipInfo.video_url}`);
      }

      // Seek to exact timestamp after video loads
      setTimeout(() => {
        videoPlayerRef.current?.seekTo(clipInfo.seek_to);
      }, 100);
    } catch (err) {
      setError('Failed to load video clip');
    }
  };

  // Handle clip selection toggle
  const handleClipSelection = (result: FrameResult, selected: boolean) => {
    setSelectedClipIds((prev) => {
      const newSet = new Set(prev);
      if (selected) {
        newSet.add(result.frame_id);
      } else {
        newSet.delete(result.frame_id);
      }
      return newSet;
    });
  };

  // Get selected clips as ClipRequest[]
  const selectedClips: ClipRequest[] = searchResults
    .filter((result) => selectedClipIds.has(result.frame_id))
    .map((result) => ({
      video_id: result.video_id,
      start_time: Math.max(0, result.timestamp - 1.5), // 1.5s before
      end_time: result.timestamp + 1.5, // 1.5s after (3s total clip)
      task_name: result.task_name,
      task_description: result.task_description
    }));

  // Clear selection
  const handleClearSelection = () => {
    setSelectedClipIds(new Set());
  };

  // Toggle selection mode
  const toggleSelectionMode = () => {
    setSelectionMode(!selectionMode);
    if (selectionMode) {
      // Exiting selection mode, clear selections
      setSelectedClipIds(new Set());
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

            {/* Show processing status when a job is running */}
            {processingJobId && (
              <ProcessingStatus
                jobId={processingJobId}
                onComplete={handleProcessingComplete}
              />
            )}

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
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Search Results
                  {searchResults.length > 0 && (
                    <span className="ml-2 text-sm font-normal text-gray-500">
                      ({searchResults.length} frames found)
                    </span>
                  )}
                </h2>

                {/* Toggle FreeMoCap Selection Mode */}
                {searchResults.length > 0 && (
                  <button
                    onClick={toggleSelectionMode}
                    className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                      selectionMode
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {selectionMode ? '✓ Selection Mode' : '🎬 FreeMoCap Mode'}
                  </button>
                )}
              </div>

              <ResultsList
                results={searchResults}
                onJumpToTime={handleJumpToTime}
                isLoading={searchMutation.isPending}
                hasSearched={hasSearched}
                selectable={selectionMode}
                selectedIds={selectedClipIds}
                onSelect={handleClipSelection}
              />
            </div>

            {/* FreeMoCap Batch Processor */}
            {selectionMode && (
              <FreeMoCapBatchProcessor
                selectedClips={selectedClips}
                onClearSelection={handleClearSelection}
              />
            )}
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
