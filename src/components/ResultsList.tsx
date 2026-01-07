import { useState } from 'react';
import type { SearchResult } from '../types';
import ResultCard from './ResultCard';

interface ResultsListProps {
  results: SearchResult[];
  queryTime?: number;
  onJumpToTime: (time: number, segmentId: string) => void;
  isLoading: boolean;
}

export default function ResultsList({
  results,
  queryTime,
  onJumpToTime,
  isLoading
}: ResultsListProps) {
  const [activeSegmentId, setActiveSegmentId] = useState<string | null>(null);

  const handleJump = (time: number, segmentId: string) => {
    setActiveSegmentId(segmentId);
    onJumpToTime(time, segmentId);
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
        <p className="text-gray-600">No results yet. Try an example query.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Metadata */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>
          Found {results.length} result{results.length !== 1 ? 's' : ''}
        </span>
        {queryTime !== undefined && (
          <span>in {queryTime.toFixed(0)} ms</span>
        )}
      </div>

      {/* Results */}
      <div className="space-y-3">
        {results.map((result) => (
          <ResultCard
            key={result.segment_id}
            result={result}
            onJump={(time) => handleJump(time, result.segment_id)}
            isActive={activeSegmentId === result.segment_id}
          />
        ))}
      </div>
    </div>
  );
}
