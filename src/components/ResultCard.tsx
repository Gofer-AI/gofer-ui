import { useState } from 'react';
import type { FrameResult } from '../types';

interface ResultCardProps {
  result: FrameResult;
  onJump: (time: number) => void;
  isActive: boolean;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
}

export default function ResultCard({
  result,
  onJump,
  isActive,
  selectable = false,
  selected = false,
  onSelect
}: ResultCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const handleCopyTimestamp = async () => {
    const timestamp = `${result.timestamp.toFixed(2)}s`;
    await navigator.clipboard.writeText(timestamp);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };

  const scorePercentage = (result.similarity_score * 100).toFixed(0);
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  return (
    <div
      className={`border rounded-lg p-4 transition-all ${
        isActive ? 'border-blue-500 bg-blue-50' :
        selected ? 'border-green-500 bg-green-50' :
        'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          {/* Checkbox for selection */}
          {selectable && (
            <input
              type="checkbox"
              checked={selected}
              onChange={(e) => onSelect?.(e.target.checked)}
              className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded flex-shrink-0"
            />
          )}

          <div className="flex-grow min-w-0">
            <h3 className="font-semibold text-gray-900">
              Frame {result.frame_number} @ {formatTime(result.timestamp)}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Task: {result.task_description}
            </p>
          </div>
          <span className="flex-shrink-0 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
            {scorePercentage}% match
          </span>
        </div>

        {/* Description Preview */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {result.description}
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onJump(result.timestamp)}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
          >
            ▶ Play at {result.timestamp.toFixed(1)}s
          </button>
          <button
            onClick={handleCopyTimestamp}
            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded transition-colors relative"
          >
            📋 Copy Time
            {showCopyNotification && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                Copied!
              </span>
            )}
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded transition-colors"
          >
            {isExpanded ? '▲ Less' : '▼ More'}
          </button>
        </div>

        {/* Collapsible Details */}
        {isExpanded && (
          <div className="pt-3 border-t border-gray-200 space-y-2 text-sm">
            <div>
              <p className="font-medium text-gray-700">Full Description:</p>
              <p className="text-gray-600 mt-1">{result.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-medium text-gray-700">Video ID:</span>
                <span className="text-gray-600 ml-1 font-mono">{result.video_id}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Task:</span>
                <span className="text-gray-600 ml-1">{result.task_name}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Frame:</span>
                <span className="text-gray-600 ml-1">{result.frame_number}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Score:</span>
                <span className="text-gray-600 ml-1">{result.similarity_score.toFixed(4)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
