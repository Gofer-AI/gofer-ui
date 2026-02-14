import { useState } from 'react';
import type { FrameResult } from '../types';
import ResultCard from './ResultCard';

interface ResultsListProps {
  results: FrameResult[];
  onJumpToTime: (videoId: string, time: number) => void;
  isLoading: boolean;
  hasSearched: boolean;
  selectable?: boolean;
  selectedIds?: Set<string>;
  onSelect?: (result: FrameResult, selected: boolean) => void;
}

export default function ResultsList({
  results,
  onJumpToTime,
  isLoading,
  hasSearched,
  selectable = false,
  selectedIds = new Set(),
  onSelect
}: ResultsListProps) {
  const [activeFrameId, setActiveFrameId] = useState<string | null>(null);

  const handleJump = (videoId: string, time: number, frameId: string) => {
    setActiveFrameId(frameId);
    onJumpToTime(videoId, time);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Searching...</p>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        {hasSearched ? (
          <div>
            <p className="text-gray-600 font-medium">No matching frames found</p>
            <p className="text-sm text-gray-500 mt-2">Try a different search query or upload more videos</p>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 font-medium">Ready to search</p>
            <p className="text-sm text-gray-500 mt-2">Enter a search query above to find specific actions in your videos</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Results */}
      <div className="space-y-3">
        {results.map((result) => (
          <ResultCard
            key={result.frame_id}
            result={result}
            onJump={(time) => handleJump(result.video_id, time, result.frame_id)}
            isActive={activeFrameId === result.frame_id}
            selectable={selectable}
            selected={selectedIds.has(result.frame_id)}
            onSelect={(selected) => onSelect?.(result, selected)}
          />
        ))}
      </div>
    </div>
  );
}
