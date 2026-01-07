import { useState } from 'react';
import type { FormEvent } from 'react';
import ExampleQueries from './ExampleQueries';

interface ControlsPanelProps {
  onVideoUpload: (file: File) => void;
  uploadedVideoName: string | null;
  demoMode: boolean;
  onDemoModeToggle: () => void;
  onSearch: (query: string, topK: number, includeSummary: boolean) => void;
  isSearching: boolean;
}

export default function ControlsPanel({
  onVideoUpload,
  uploadedVideoName,
  demoMode,
  onDemoModeToggle,
  onSearch,
  isSearching
}: ControlsPanelProps) {
  const [query, setQuery] = useState('');
  const [topK, setTopK] = useState(10);
  const [includeSummary, setIncludeSummary] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, topK, includeSummary);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      onVideoUpload(file);
    }
  };

  return (
    <div className="w-full lg:w-96 bg-white rounded-lg border border-gray-200 p-6 space-y-6 h-fit">
      <div className="space-y-4">
        {/* Video Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Upload Video
          </label>
          <div className="flex flex-col gap-2">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              disabled={demoMode}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {uploadedVideoName && !demoMode && (
              <p className="text-sm text-gray-600">
                Selected: <span className="font-medium">{uploadedVideoName}</span>
              </p>
            )}
          </div>
        </div>

        {/* Demo Mode Toggle */}
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div>
            <label className="text-sm font-semibold text-gray-700">Demo Mode</label>
            <p className="text-xs text-gray-600">Use hardcoded demo video</p>
          </div>
          <button
            onClick={onDemoModeToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              demoMode ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                demoMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {demoMode && (
          <div className="px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-xs text-yellow-800 font-medium">Demo Mode Active</p>
          </div>
        )}
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Search Query
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for moments in your video..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Options */}
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Results (top_k)
            </label>
            <input
              type="number"
              value={topK}
              onChange={(e) => setTopK(Math.min(20, Math.max(1, parseInt(e.target.value) || 10)))}
              min="1"
              max="20"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="includeSummary"
              checked={includeSummary}
              onChange={(e) => setIncludeSummary(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="includeSummary" className="text-sm text-gray-700">
              Generate AI summaries (slower)
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSearching || !query.trim()}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
        >
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Example Queries */}
      <ExampleQueries onSelectQuery={setQuery} />
    </div>
  );
}
