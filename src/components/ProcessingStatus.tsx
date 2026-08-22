import { useState, useEffect } from 'react';
import {
  API_BASE_URL,
  STATUS_CONFIG,
  VIDEO_STATUS,
  SSE_CONFIG,
  SUCCESS_MESSAGES
} from '../constants';

/**
 * Props for ProcessingStatus component
 */
interface ProcessingStatusProps {
  /** Job ID to track processing status */
  jobId: string;
  /** Callback function when processing completes */
  onComplete: (videoId: string) => void;
}

/**
 * Job status data structure from SSE stream
 */
interface JobStatus {
  job_id: string;
  status: string;
  progress: number;
  message: string;
  video_id?: string;
  error?: string;
}

/**
 * ProcessingStatus Component
 *
 * Displays real-time video processing status using Server-Sent Events (SSE).
 * Shows progress bar, status badges, and completion/error messages.
 *
 * @param jobId - The job ID to track processing status
 * @param onComplete - Callback function called when processing completes successfully
 */
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
        if (data.status === VIDEO_STATUS.COMPLETED && data.video_id) {
          onComplete(data.video_id);
          setTimeout(() => {
            eventSource.close();
          }, SSE_CONFIG.COMPLETED_MESSAGE_DELAY);
        }

        // If failed, close connection after delay
        if (data.status === VIDEO_STATUS.FAILED) {
          setTimeout(() => {
            eventSource.close();
          }, SSE_CONFIG.ERROR_MESSAGE_DELAY);
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

  const config = STATUS_CONFIG[status.status] || STATUS_CONFIG[VIDEO_STATUS.QUEUED];

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
      {status.status === VIDEO_STATUS.COMPLETED && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-sm text-green-800">
            {SUCCESS_MESSAGES.PROCESSING_COMPLETE}
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
