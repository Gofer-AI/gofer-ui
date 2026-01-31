import { useState } from 'react';
import { batchProcessClipsForFreeMoCap } from '../api/client';
import type { ClipRequest, BatchImportResponse, ClipResult } from '../types';

interface FreeMoCapBatchProcessorProps {
  selectedClips: ClipRequest[];
  onClearSelection: () => void;
}

export default function FreeMoCapBatchProcessor({
  selectedClips,
  onClearSelection
}: FreeMoCapBatchProcessorProps) {
  const [batchResponse, setBatchResponse] = useState<BatchImportResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (selectedClips.length === 0) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await batchProcessClipsForFreeMoCap(selectedClips);
      setBatchResponse(response);
      onClearSelection();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit batch');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setBatchResponse(null);
    setError(null);
  };

  // No batch yet, show selection summary and submit button
  if (!batchResponse) {
    return (
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">FreeMoCap Batch Processing</h3>

        {selectedClips.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Select clips from search results to process with FreeMoCap motion capture.
          </p>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{selectedClips.length} clips selected</p>
                <p className="text-sm text-gray-500">
                  Clips will be extracted and sent to FreeMoCap for 3D pose estimation
                </p>
              </div>
              <button
                onClick={onClearSelection}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Clear
              </button>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : '🎬 Process with FreeMoCap'}
            </button>

            <p className="text-xs text-gray-500">
              Clips will be extracted from your videos and sent to the configured FreeMoCap endpoint for processing.
            </p>
          </div>
        )}
      </div>
    );
  }

  // Batch submitted, show results summary
  return (
    <div className="space-y-4">
      {/* Batch Summary */}
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Batch Submitted</h3>
          <button
            onClick={handleReset}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            ← Back to Selection
          </button>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Batch ID:</span>
            <span className="font-mono font-semibold">{batchResponse.batch_id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Clips:</span>
            <span className="font-semibold">{batchResponse.total_clips}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Submitted:</span>
            <span className="font-semibold text-green-600">{batchResponse.submitted}</span>
          </div>
          {batchResponse.failed > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Failed:</span>
              <span className="font-semibold text-red-600">{batchResponse.failed}</span>
            </div>
          )}
        </div>

        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
          <p className="text-sm text-green-800">{batchResponse.message}</p>
        </div>
      </div>

      {/* Individual Clip Results */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-700">
          Clip Results ({batchResponse.results.length})
        </h4>
        {batchResponse.results.map((result, index) => (
          <ClipResultCard key={index} result={result} index={index + 1} />
        ))}
      </div>
    </div>
  );
}

// Individual clip result card
function ClipResultCard({ result, index }: { result: ClipResult; index: number }) {
  const isSuccess = result.status === 'sent';

  return (
    <div className={`bg-white p-4 rounded-lg shadow border ${
      isSuccess ? 'border-green-200' : 'border-red-200'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-700">Clip #{index}</span>
            <span className={`px-2 py-0.5 text-xs font-medium rounded ${
              isSuccess
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {isSuccess ? '✓ Sent' : '✗ Failed'}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {result.video_id.slice(0, 12)}... @ {result.start_time.toFixed(1)}s - {result.end_time.toFixed(1)}s
          </p>
        </div>
      </div>

      {isSuccess ? (
        <div className="space-y-1 text-sm">
          {result.clip_url && (
            <div>
              <span className="text-gray-600">Clip URL:</span>
              <a
                href={result.clip_url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 hover:underline text-xs break-all"
              >
                {result.clip_url.split('/').pop()}
              </a>
            </div>
          )}
          {result.job_id && (
            <div>
              <span className="text-gray-600">Job ID:</span>
              <span className="ml-2 font-mono text-xs">{result.job_id}</span>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-2">
            ℹ️ Check FreeMoCap service for processing status
          </p>
        </div>
      ) : (
        <div className="p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
          {result.error || 'Unknown error'}
        </div>
      )}
    </div>
  );
}
