import { useState } from 'react';
import type { SearchResult } from '../types';
import { formatTimeRange } from '../utils/time';

interface ResultCardProps {
  result: SearchResult;
  onJump: (time: number) => void;
  isActive: boolean;
}

export default function ResultCard({ result, onJump, isActive }: ResultCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const handleCopyTimestamp = async () => {
    const timestamp = formatTimeRange(result.start_time, result.end_time);
    await navigator.clipboard.writeText(timestamp);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };

  const scorePercentage = (result.score * 100).toFixed(0);

  return (
    <div
      className={`border rounded-lg p-4 transition-all ${
        isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="flex gap-4">
        {/* Thumbnail */}
        <div className="flex-shrink-0">
          <img
            src={result.thumbnail_url}
            alt={`Segment at ${formatTimeRange(result.start_time, result.end_time)}`}
            className="w-32 h-20 object-cover rounded"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="80"%3E%3Crect fill="%23ddd" width="128" height="80"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999"%3ENo Image%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-grow min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-gray-900">
              Segment at {formatTimeRange(result.start_time, result.end_time)}
            </h3>
            <span className="flex-shrink-0 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
              {scorePercentage}%
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mb-3">
            <button
              onClick={() => onJump(result.start_time)}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
            >
              Jump
            </button>
            <button
              onClick={handleCopyTimestamp}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded transition-colors relative"
            >
              Copy Timestamp
              {showCopyNotification && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
          </div>

          {/* Collapsible Details */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium mb-2"
          >
            {isExpanded ? 'Hide' : 'Show'} Details
          </button>

          {isExpanded && (
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium text-gray-700">Visual Context:</p>
                <p className="text-gray-600">{result.visual_context}</p>
              </div>

              {result.transcript_snippet && (
                <div>
                  <p className="font-medium text-gray-700">Transcript:</p>
                  <p className="text-gray-600">{result.transcript_snippet}</p>
                </div>
              )}

              {result.ai_summary && (
                <div>
                  <p className="font-medium text-gray-700">AI Summary:</p>
                  <p className="text-gray-600 italic">{result.ai_summary}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
