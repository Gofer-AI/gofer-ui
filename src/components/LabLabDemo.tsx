import { useApp, useVideo, useSearch } from '../context';
import UploadMode from './modes/UploadMode';
import SearchMode from './modes/SearchMode';
import AnalysisPanel from './modes/AnalysisPanel';
import R2R2RSection from './modes/R2R2RSection';

/**
 * LabLabDemo Component
 *
 * Main application interface for the Gofer AI demo.
 * Provides two modes:
 * 1. Upload Mode - Upload videos, analyze with AI, generate robot instructions
 * 2. Search Mode - Semantic search for demonstration videos, select and process
 *
 * Uses Context API for state management across child components.
 */
export default function LabLabDemo() {
  const { mode, error, setMode, setError } = useApp();
  const { resetVideoState } = useVideo();
  const { resetSearchState } = useSearch();

  /**
   * Handle mode switch between upload and search
   */
  const handleModeSwitch = (newMode: 'upload' | 'search') => {
    setMode(newMode);
    setError(null);
    resetVideoState();
    resetSearchState();
  };

  /**
   * Handle file selection in upload mode
   */
  const handleFileSelected = () => {
    setError(null);
  };

  /**
   * Handle errors from child components
   */
  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">
            Action Primitive Detection
          </h1>
          <p className="text-gray-500 text-sm">
            Upload or search a video to generate robotic instructions
          </p>
        </header>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-950 border border-red-800 rounded-lg" role="alert">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Step 1: Upload or Search */}
        <section className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6" aria-labelledby="step-1-heading">
          <div className="flex items-center justify-between mb-6">
            <h2 id="step-1-heading" className="text-lg font-semibold text-white">
              Step 1
            </h2>

            {/* Mode Switcher */}
            <div className="flex bg-gray-100 rounded-lg p-1" role="tablist" aria-label="Select mode">
              <button
                onClick={() => handleModeSwitch('upload')}
                role="tab"
                aria-selected={mode === 'upload'}
                aria-controls="upload-panel"
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  mode === 'upload'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Upload Video
              </button>
              <button
                onClick={() => handleModeSwitch('search')}
                role="tab"
                aria-selected={mode === 'search'}
                aria-controls="search-panel"
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  mode === 'search'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Search Videos
              </button>
            </div>
          </div>

          {/* Upload Mode Panel */}
          {mode === 'upload' && (
            <div id="upload-panel" role="tabpanel" aria-labelledby="upload-tab">
              <UploadMode onFileSelected={handleFileSelected} onError={handleError} />
            </div>
          )}

          {/* Search Mode Panel */}
          {mode === 'search' && (
            <div id="search-panel" role="tabpanel" aria-labelledby="search-tab">
              <SearchMode onError={handleError} />
            </div>
          )}
        </section>

        {/* Step 2: Analyze (Upload mode only) */}
        {mode === 'upload' && (
          <AnalysisPanel onError={handleError} />
        )}

        {/* Step 3/2: Generate R2R2R (Both modes) */}
        <R2R2RSection onError={handleError} />
      </div>
    </div>
  );
}
