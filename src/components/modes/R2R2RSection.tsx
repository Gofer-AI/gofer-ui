import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { processR2R2R, getVideoDownloadUrl, getHDFDownloadUrl } from '../../api/client';
import { useVideo, useSearch, useApp } from '../../context';
import { ERROR_MESSAGES } from '../../constants';
import type { R2R2RResponse } from '../../types';

/**
 * Props for R2R2RSection component
 */
interface R2R2RSectionProps {
  /** Callback when error occurs */
  onError: (error: string) => void;
}

/**
 * R2R2RSection Component
 *
 * Handles Real2Render2Real (R2R2R) processing pipeline.
 * Processes selected videos and provides download links for:
 * - MP4 video (reconstructed motion)
 * - HDF5/JSON data (robot training data)
 *
 * @param onError - Called when R2R2R processing fails
 */
export default function R2R2RSection({ onError }: R2R2RSectionProps) {
  const { mode } = useApp();
  const { videoFile, analysisResult } = useVideo();
  const { selectedResult } = useSearch();
  const [r2r2rResult, setR2r2rResult] = useState<R2R2RResponse | null>(null);

  const r2r2rMutation = useMutation({
    mutationFn: processR2R2R,
    onSuccess: (data) => {
      setR2r2rResult(data);
    },
    onError: () => {
      onError(ERROR_MESSAGES.ANALYSIS_FAILED);
    },
  });

  const handleGenerate = () => {
    if (mode === 'upload' && videoFile) {
      r2r2rMutation.mutate(videoFile);
    }
  };

  // Determine if R2R2R generation should be available
  const canGenerateUpload = mode === 'upload' && analysisResult !== null && videoFile !== null;
  const canGenerateSearch = mode === 'search' && selectedResult !== null;

  if (!canGenerateUpload && !canGenerateSearch) {
    return null;
  }

  const stepNumber = mode === 'upload' ? '3' : '2';

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
      <h2 className="text-lg font-semibold text-white mb-1">
        Step {stepNumber} — Generate Robotic Instructions
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Send video through R2R2R to generate MP4 and HDF/JSON files for robot playback.
      </p>

      {!r2r2rResult && (
        <button
          onClick={handleGenerate}
          disabled={r2r2rMutation.isPending || mode === 'search'}
          aria-label={
            r2r2rMutation.isPending
              ? 'Processing through R2R2R pipeline'
              : mode === 'search'
              ? 'R2R2R generation from search coming soon'
              : 'Generate robot instructions'
          }
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
          <div className="w-full bg-gray-200 rounded-full h-2" role="progressbar" aria-label="R2R2R processing progress">
            <div className="bg-indigo-500 h-2 rounded-full animate-pulse w-2/3" />
          </div>
        </div>
      )}

      {/* Download buttons after R2R2R completes */}
      {r2r2rResult && (
        <div className="mt-4 space-y-3">
          <p className="text-sm text-green-600 font-medium" role="status">
            Processing complete! Download your files:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={getVideoDownloadUrl(r2r2rResult.video_id)}
              download
              aria-label="Download processed video MP4 file"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              ↓ Download MP4
            </a>
            <a
              href={getHDFDownloadUrl(r2r2rResult.video_id)}
              download
              aria-label="Download robot training data HDF5/JSON file"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              ↓ Download HDF/JSON
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
