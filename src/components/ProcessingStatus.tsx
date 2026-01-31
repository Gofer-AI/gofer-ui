import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';

interface ProcessingStatusProps {
  jobId: string;
  onComplete: (videoId: string) => void;
}

interface JobStatus {
  job_id: string;
  status: string;
  progress: number;
  message: string;
  video_id?: string;
  error?: string;
}

// Status display configurations
const statusConfig: Record<string, { label: string; color: string; icon: string }> = {
  queued: { label: 'Queued', color: 'bg-gray-100 text-gray-800', icon: '' },
  downloading: { label: 'Downloading', color: 'bg-blue-100 text-blue-800', icon: '' },
  extracting_frames: { label: 'Extracting Frames', color: 'bg-purple-100 text-purple-800', icon: '' },
  analyzing_frames: { label: 'Analyzing', color: 'bg-indigo-100 text-indigo-800', icon: '' },
  transcribing_audio: { label: 'Transcribing Audio', color: 'bg-yellow-100 text-yellow-800', icon: '' },
  generating_embeddings: { label: 'Generating Embeddings', color: 'bg-pink-100 text-pink-800', icon: '' },
  indexing: { label: 'Indexing', color: 'bg-teal-100 text-teal-800', icon: '' },
  completed: { label: 'Completed', color: 'bg-green-100 text-green-800', icon: '' },
  failed: { label: 'Failed', color: 'bg-red-100 text-red-800', icon: '' },
};

export default function ProcessingStatus({ jobId, onComplete }: ProcessingStatusProps) {
  const [status, setStatus] = useState<JobStatus | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Create EventSource for Server-Sent Events
    const eventSource = new EventSource(
      `${API_BASE_URL}/videos/${jobId}/status/stream`
    );

    eventSource.onopen = () => {
      setIsConnected(true);
    };

    eventSource.onmessage = (event) => {
      try {
        const data: JobStatus = JSON.parse(event.data);
        setStatus(data);

        // If completed, notify parent and close connection
        if (data.status === 'completed' && data.video_id) {
          onComplete(data.video_id);
          setTimeout(() => {
            eventSource.close();
          }, 2000); // Keep the completed message visible for 2 seconds
        }

        // If failed, close connection after delay
        if (data.status === 'failed') {
          setTimeout(() => {
            eventSource.close();
          }, 5000); // Keep the error message visible for 5 seconds
        }
      } catch (error) {
        // Error parsing status update - silently ignore
      }
    };

    eventSource.onerror = () => {
      // SSE connection closed - this is normal after completion
      setIsConnected(false);
      eventSource.close();
    };

    // Cleanup on unmount
    return () => {
      eventSource.close();
    };
  }, [jobId, onComplete]);

  if (!status) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center space-x-3">
          <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full"></div>
          <span className="text-gray-600">Connecting to processing status...</span>
        </div>
      </div>
    );
  }

  const config = statusConfig[status.status] || statusConfig.queued;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Processing Video
        </h3>
        {isConnected && (
          <span className="flex items-center text-xs text-green-600">
            <span className="h-2 w-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
            Live
          </span>
        )}
      </div>

      {/* Status Badge */}
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{config.icon}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
              {config.label}
            </span>
            <span className="text-sm font-medium text-gray-900">
              {status.progress}%
            </span>
          </div>
          <p className="text-sm text-gray-600">{status.message}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ease-out ${
            status.status === 'completed'
              ? 'bg-green-600'
              : status.status === 'failed'
              ? 'bg-red-600'
              : 'bg-blue-600'
          }`}
          style={{ width: `${status.progress}%` }}
        ></div>
      </div>

      {/* Error Message */}
      {status.error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-800">
            <strong>Error:</strong> {status.error}
          </p>
        </div>
      )}

      {/* Completion Message */}
      {status.status === 'completed' && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-sm text-green-800">
            Video processed successfully! You can now search for actions in this video.
          </p>
        </div>
      )}

      {/* Job ID */}
      <div className="pt-2 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Job ID: <code className="bg-gray-100 px-2 py-1 rounded">{jobId}</code>
        </p>
      </div>
    </div>
  );
}
