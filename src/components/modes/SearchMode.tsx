import { useMutation } from '@tanstack/react-query';
import { semanticSearch } from '../../api/client';
import { useSearch } from '../../context';
import { ERROR_MESSAGES, DEFAULTS } from '../../constants';
import type { SearchResult } from '../../types';

/**
 * Props for SearchMode component
 */
interface SearchModeProps {
  /** Callback when error occurs */
  onError: (error: string) => void;
}

/**
 * SearchMode Component
 *
 * Provides semantic search interface for finding demonstration videos.
 * Displays search results with similarity scores and video previews.
 *
 * @param onError - Called when search fails
 */
export default function SearchMode({ onError }: SearchModeProps) {
  const { query, searchResults, selectedResult, setQuery, setSearchResults, setSelectedResult } = useSearch();

  const searchMutation = useMutation({
    mutationFn: (q: string) => semanticSearch(q, DEFAULTS.SEARCH_TOP_K),
    onSuccess: (data) => {
      setSearchResults(data.results);
      setSelectedResult(null);
    },
    onError: () => {
      onError(ERROR_MESSAGES.SEARCH_FAILED);
    },
  });

  const handleSearch = () => {
    if (query) {
      searchMutation.mutate(query);
    }
  };

  const handleSelectResult = (result: SearchResult) => {
    setSelectedResult(result);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query) {
      handleSearch();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search e.g. picking up cup, rotating handle..."
          aria-label="Search query for demonstration videos"
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          disabled={!query || searchMutation.isPending}
          aria-label={searchMutation.isPending ? 'Searching videos' : 'Search videos'}
          className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {searchMutation.isPending ? 'Searching...' : 'Search'}
        </button>
      </div>

      {searchMutation.isPending && (
        <div className="w-full bg-gray-200 rounded-full h-2" role="progressbar" aria-label="Search progress">
          <div className="bg-blue-600 h-2 rounded-full animate-pulse w-2/3" />
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="space-y-3 mt-2">
          <p className="text-sm text-gray-500" role="status">
            {searchResults.length} results found. Select one to continue.
          </p>

          <div role="list" aria-label="Search results">
            {searchResults.map((result) => {
              const isSelected = selectedResult?.video_id === result.video_id;
              return (
                <div
                  key={result.video_id}
                  role="listitem"
                  onClick={() => handleSelectResult(result)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectResult(result);
                    }
                  }}
                  tabIndex={0}
                  aria-selected={isSelected}
                  aria-label={`${result.task}, ${(result.similarity * 100).toFixed(0)}% match`}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {/* Radio indicator */}
                        <div
                          role="radio"
                          aria-checked={isSelected}
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            isSelected ? 'border-blue-500' : 'border-gray-300'
                          }`}
                        >
                          {isSelected && (
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                          )}
                        </div>
                        <h4 className="font-medium text-gray-900 text-sm truncate">
                          {result.task}
                        </h4>
                        <span className="text-xs text-gray-400 flex-shrink-0">
                          {(result.similarity * 100).toFixed(0)}% match
                        </span>
                      </div>

                      {result.objects.length > 0 && (
                        <p className="text-xs text-gray-500 ml-6">
                          Objects: {result.objects.join(', ')}
                        </p>
                      )}

                      {result.actions.length > 0 && (
                        <p className="text-xs text-gray-400 ml-6 mt-0.5">
                          Actions: {result.actions.join(', ')}
                        </p>
                      )}

                      <p className="text-xs text-gray-300 ml-6 mt-0.5">
                        {new Date(result.created_at).toLocaleDateString()}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectResult(result);
                      }}
                      aria-label={`Select ${result.task} for processing`}
                      className="flex-shrink-0 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-200 transition-colors"
                    >
                      ▶ Select
                    </button>
                  </div>

                  {/* Inline video preview when selected */}
                  {isSelected && result.video_url && (
                    <div className="mt-3 rounded-lg overflow-hidden border border-gray-200 bg-black">
                      <video
                        src={`${import.meta.env.VITE_API_BASE_URL}${result.video_url}`}
                        controls
                        autoPlay
                        aria-label="Selected video preview"
                        className="w-full max-h-56 object-contain"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {searchMutation.isSuccess && searchResults.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-4" role="status">
          No videos found for your query.
        </p>
      )}
    </div>
  );
}
