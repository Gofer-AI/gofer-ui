import { createContext, useContext, useState, ReactNode } from 'react';
import type { SearchResult } from '../types';

/**
 * Search state interface
 */
interface SearchState {
  /** Current search query */
  query: string;
  /** Search results from backend */
  searchResults: SearchResult[];
  /** Currently selected search result */
  selectedResult: SearchResult | null;
}

/**
 * Search context actions interface
 */
interface SearchContextValue extends SearchState {
  /** Set the search query */
  setQuery: (query: string) => void;
  /** Set search results */
  setSearchResults: (results: SearchResult[]) => void;
  /** Set selected search result */
  setSelectedResult: (result: SearchResult | null) => void;
  /** Reset all search state */
  resetSearchState: () => void;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

/**
 * Props for SearchProvider component
 */
interface SearchProviderProps {
  children: ReactNode;
}

/**
 * SearchProvider Component
 *
 * Provides search-related state and actions to the application.
 * Manages search queries, results, and selected items.
 *
 * @param children - Child components that will have access to search context
 */
export function SearchProvider({ children }: SearchProviderProps) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);

  /**
   * Reset all search-related state
   */
  const resetSearchState = () => {
    setQuery('');
    setSearchResults([]);
    setSelectedResult(null);
  };

  const value: SearchContextValue = {
    query,
    searchResults,
    selectedResult,
    setQuery,
    setSearchResults,
    setSelectedResult,
    resetSearchState,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

/**
 * Hook to access search context
 *
 * @returns Search context value
 * @throws Error if used outside SearchProvider
 */
export function useSearch(): SearchContextValue {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
