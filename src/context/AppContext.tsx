import { createContext, useContext, useState, ReactNode } from 'react';

/**
 * App mode type
 */
export type AppMode = 'upload' | 'search';

/**
 * App state interface
 */
interface AppState {
  /** Current app mode (upload or search) */
  mode: AppMode;
  /** Current error message */
  error: string | null;
}

/**
 * App context actions interface
 */
interface AppContextValue extends AppState {
  /** Set the app mode */
  setMode: (mode: AppMode) => void;
  /** Set error message */
  setError: (error: string | null) => void;
  /** Clear error message */
  clearError: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

/**
 * Props for AppProvider component
 */
interface AppProviderProps {
  children: ReactNode;
}

/**
 * AppProvider Component
 *
 * Provides application-level state and actions.
 * Manages UI mode, error messages, and other global app state.
 *
 * @param children - Child components that will have access to app context
 */
export function AppProvider({ children }: AppProviderProps) {
  const [mode, setMode] = useState<AppMode>('upload');
  const [error, setError] = useState<string | null>(null);

  /**
   * Clear the current error message
   */
  const clearError = () => {
    setError(null);
  };

  const value: AppContextValue = {
    mode,
    error,
    setMode,
    setError,
    clearError,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

/**
 * Hook to access app context
 *
 * @returns App context value
 * @throws Error if used outside AppProvider
 */
export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
