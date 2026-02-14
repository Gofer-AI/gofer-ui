import { useState, useRef, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  uploadVideoLabLab,
  analyzeVideo,
  semanticSearch,
  processR2R2R,
  getVideoDownloadUrl,
  getHDFDownloadUrl,
} from '../api/client';
import type { LabLabAnalysisResponse, SearchResult, R2R2RResponse } from '../types';

type Mode = 'upload' | 'search';

export default function LabLabDemo() {
  const [mode, setMode] = useState<Mode>('upload');

  // Mode A state
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [task, setTask] = useState('');
  const [analysisResult, setAnalysisResult] = useState<LabLabAnalysisResponse | null>(null);

  // Mode B state
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);

  // R2R2R state (both modes)
  const [r2r2rResult, setR2r2rResult] = useState<R2R2RResponse | null>(null);

  const [error, setError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Create local preview URL when file selected
  useEffect(() => {
    if (videoFile) {
      const url = URL.createObjectURL(videoFile);
      setLocalVideoUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [videoFile]);

  // --- Mode A: Upload ---
  const uploadMutation = useMutation({
    mutationFn: (file: File) => uploadVideoLabLab(file),
    onSuccess: (data) => {
      setVideoId(data.video_id);
      setError(null);
    },
    onError: () => setError('Upload failed. Please try again.'),
  });

  // --- Mode A: Analyze ---
  const analysisMutation = useMutation({
    mutationFn: ({ id, task }: { id: string; task: string }) =>
      analyzeVideo(id, task, 3.0, 8),
    onSuccess: (data) => {
      setAnalysisResult(data);
      setError(null);
    },
    onError: () => setError('Analysis failed. Please try again.'),
  });

  // --- Mode B: Search ---
  const searchMutation = useMutation({
    mutationFn: (q: string) => semanticSearch(q, 5),
    onSuccess: (data) => {
      setSearchResults(data.results);
      setSelectedResult(null);
      setError(null);
    },
    onError: () => setError('Search failed. Please try again.'),
  });

  // --- R2R2R (both modes) ---
  const r2r2rMutation = useMutation({
    mutationFn: (file: File) => processR2R2R(file),
    onSuccess: (data) => {
      setR2r2rResult(data);
      setError(null);
    },
    onError: () => setError('R2R2R processing failed. Please try again.'),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setVideoId(null);
      setAnalysisResult(null);
      setR2r2rResult(null);
      setError(null);
    }
  };

  const handleSelectSearchResult = (result: SearchResult) => {
    setSelectedResult(result);
  };

  const handleModeSwitch = (newMode: Mode) => {
    setMode(newMode);
    setError(null);
    setSearchResults([]);
    setSelectedResult(null);
    setAnalysisResult(null);
    setR2r2rResult(null);
  };

  const isAnalyzeComplete = analysisResult !== null;
  const isSearchSelected = selectedResult !== null;
  const canGenerateUpload = isAnalyzeComplete && videoFile;
  const canGenerateSearch = isSearchSelected;

  // For Mode B we don't have the file, so we pass the video_id from search result
  // R2R2R needs the actual video file - for Mode B we need to fetch it first
  const handleR2R2R = () => {
    if (mode === 'upload' && videoFile) {
      r2r2rMutation.mutate(videoFile);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-1">Action Primitive Detection</h1>
        <p className="text-gray-500 mb-8 text-sm">Upload or search a video to generate robotic instructions</p>

        {error && (
          <div className="mb-6 p-4 bg-red-950 border border-red-800 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* ── STEP 1 ── */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Step 1</h2>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => handleModeSwitch('upload')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  mode === 'upload'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Upload Video
              </button>
              <button
                onClick={() => handleModeSwitch('search')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  mode === 'search'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Search Videos
              </button>
            </div>
          </div>

          {/* ── MODE A: Upload ── */}
          {mode === 'upload' && (
            <div className="space-y-4">
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0
                  file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100 cursor-pointer"
              />

              {localVideoUrl && (
                <div className="rounded-lg overflow-hidden border border-gray-200 bg-black">
                  <video
                    ref={videoRef}
                    src={localVideoUrl}
                    controls
                    className="w-full max-h-72 object-contain"
                  />
                </div>
              )}

              {videoFile && !videoId && (
                <button
                  onClick={() => uploadMutation.mutate(videoFile)}
                  disabled={uploadMutation.isPending}
                  className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                  {uploadMutation.isPending ? 'Uploading...' : 'Upload Video'}
                </button>
              )}

              {uploadMutation.isPending && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full animate-pulse w-3/4" />
                </div>
              )}

              {videoId && (
                <p className="text-sm text-green-600 font-medium">Video uploaded successfully!</p>
              )}
            </div>
          )}

          {/* ── MODE B: Search ── */}
          {mode === 'search' && (
            <div className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && query && searchMutation.mutate(query)}
                  placeholder="Search e.g. picking up cup, rotating handle..."
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => searchMutation.mutate(query)}
                  disabled={!query || searchMutation.isPending}
                  className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                  {searchMutation.isPending ? 'Searching...' : 'Search'}
                </button>
              </div>

              {searchMutation.isPending && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full animate-pulse w-2/3" />
                </div>
              )}

              {searchResults.length > 0 && (
                <div className="space-y-3 mt-2">
                  <p className="text-sm text-gray-500">
                    {searchResults.length} results found. Select one to continue.
                  </p>

                  {searchResults.map((result) => {
                    const isSelected = selectedResult?.video_id === result.video_id;
                    return (
                      <div
                        key={result.video_id}
                        onClick={() => handleSelectSearchResult(result)}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              {/* Radio indicator */}
                              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                isSelected ? 'border-blue-500' : 'border-gray-300'
                              }`}>
                                {isSelected && (
                                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                                )}
                              </div>
                              <h4 className="font-medium text-gray-900 text-sm truncate">
                                {result.task}
                              </h4>
                              <span className="text-xs text-gray-400 flex-shrink-0">
                                {(result.similarity * 100).toFixed(0)}% match
                              </span>
                            </div>

                            {result.objects.length > 0 && (
                              <p className="text-xs text-gray-500 ml-6">
                                Objects: {result.objects.join(', ')}
                              </p>
                            )}

                            {result.actions.length > 0 && (
                              <p className="text-xs text-gray-400 ml-6 mt-0.5">
                                Actions: {result.actions.join(', ')}
                              </p>
                            )}

                            <p className="text-xs text-gray-300 ml-6 mt-0.5">
                              {new Date(result.created_at).toLocaleDateString()}
                            </p>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectSearchResult(result);
                            }}
                            className="flex-shrink-0 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-200 transition-colors"
                          >
                            ▶ Select
                          </button>
                        </div>

                        {/* Inline video preview when selected */}
                        {isSelected && result.video_url && (
                          <div className="mt-3 rounded-lg overflow-hidden border border-gray-200 bg-black">
                            <video
                              src={`${import.meta.env.VITE_API_BASE_URL}${result.video_url}`}
                              controls
                              autoPlay
                              className="w-full max-h-56 object-contain"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {searchMutation.isSuccess && searchResults.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">
                  No videos found for your query.
                </p>
              )}
            </div>
          )}
        </div>

        {/* ── STEP 2: Analyze (Mode A only) ── */}
        {mode === 'upload' && videoId && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4">Step 2 — Analyze Video</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Task Description
                </label>
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="e.g. picking up cup, rotating handle"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={() => analysisMutation.mutate({ id: videoId, task })}
                disabled={!task || analysisMutation.isPending}
                className="px-5 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
              >
                {analysisMutation.isPending ? 'Analyzing...' : 'Analyze Actions'}
              </button>

              {analysisMutation.isPending && (
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Running Gemini vision analysis...</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full animate-pulse w-1/2" />
                  </div>
                </div>
              )}

              {isAnalyzeComplete && localVideoUrl && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-green-600 font-medium">Analysis complete!</p>
                    {analysisResult.stored_in_vector_db && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        Stored in vector DB
                      </span>
                    )}
                  </div>
                  <div className="rounded-lg overflow-hidden border border-gray-200 bg-black">
                    <video
                      src={localVideoUrl}
                      controls
                      className="w-full max-h-72 object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── GENERATE STEP (both modes) ── */}
        {(canGenerateUpload || canGenerateSearch) && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-1">
              Step {mode === 'upload' ? '3' : '2'} — Generate Robotic Instructions
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Send video through R2R2R to generate MP4 and HDF/JSON files for robot playback.
            </p>

            {!r2r2rResult && (
              <button
                onClick={handleR2R2R}
                disabled={r2r2rMutation.isPending || mode === 'search'}
                className={`px-5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  mode === 'search'
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50'
                }`}
              >
                {r2r2rMutation.isPending
                  ? 'Processing...'
                  : mode === 'search'
                  ? 'Generate Robot Instructions — Coming Soon'
                  : 'Generate Robot Instructions'}
              </button>
            )}

            {r2r2rMutation.isPending && (
              <div className="mt-4 space-y-1">
                <p className="text-xs text-gray-500">Processing through R2R2R pipeline...</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full animate-pulse w-2/3" />
                </div>
              </div>
            )}

            {/* Download buttons after R2R2R completes */}
            {r2r2rResult && (
              <div className="mt-4 space-y-3">
                <p className="text-sm text-green-600 font-medium">
                  Processing complete! Download your files:
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`${getVideoDownloadUrl(r2r2rResult.video_id)}`}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    ↓ Download MP4
                  </a>
                  <a
                    href={`${getHDFDownloadUrl(r2r2rResult.video_id)}`}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    ↓ Download HDF/JSON
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
