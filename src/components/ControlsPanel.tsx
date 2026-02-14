import { useState } from 'react';
import type { FormEvent } from 'react';
import ExampleQueries from './ExampleQueries';

interface ControlsPanelProps {
  onSearch: (query: string, topK: number) => void;
  isSearching: boolean;
  hasVideo: boolean;
}

export default function ControlsPanel({
  onSearch,
  isSearching,
  hasVideo
}: ControlsPanelProps) {
  const [query, setQuery] = useState('');
  const [topK, setTopK] = useState(5);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, topK);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Search Frames</h2>

      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-sm text-blue-800">
          {hasVideo
            ? "Searching current video and all indexed videos"
            : "Searching all indexed videos in the database"}
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Query
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="person reaching for object..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Results
          </label>
          <input
            type="number"
            value={topK}
            onChange={(e) => setTopK(Math.min(10, Math.max(1, parseInt(e.target.value) || 5)))}
            min="1"
            max="10"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSearching || !query.trim()}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors"
        >
          {isSearching ? 'Searching...' : 'Search All Videos'}
        </button>
      </form>

      {/* Example Queries */}
      <ExampleQueries onSelectQuery={setQuery} />
    </div>
  );
}
