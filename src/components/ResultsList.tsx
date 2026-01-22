import { useState } from 'react';
import type { FrameResult } from '../types';
import ResultCard from './ResultCard';

interface ResultsListProps {
  results: FrameResult[];
  onJumpToTime: (videoId: string, time: number) => void;
  isLoading: boolean;
}

export default function ResultsList({
  results,
  onJumpToTime,
  isLoading
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
        <p className="text-gray-600">No results yet. Upload a video and try searching.</p>
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
          />
        ))}
      </div>
    </div>
  );
}
