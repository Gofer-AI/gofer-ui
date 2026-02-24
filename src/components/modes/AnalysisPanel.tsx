import { useMutation } from '@tanstack/react-query';
import { analyzeVideo } from '../../api/client';
import { useVideo } from '../../context';
import { ERROR_MESSAGES, DEFAULTS } from '../../constants';

/**
 * Props for AnalysisPanel component
 */
interface AnalysisPanelProps {
  /** Callback when error occurs */
  onError: (error: string) => void;
}

/**
 * AnalysisPanel Component
 *
 * Provides interface for analyzing uploaded videos with AI.
 * Detects action primitives and scene understanding.
 * Only shown in upload mode after video upload completes.
 *
 * @param onError - Called when analysis fails
 */
export default function AnalysisPanel({ onError }: AnalysisPanelProps) {
  const { videoId, task, localVideoUrl, analysisResult, setTask, setAnalysisResult } = useVideo();

  const analysisMutation = useMutation({
    mutationFn: ({ id, task }: { id: string; task: string }) =>
      analyzeVideo(id, task, DEFAULTS.TARGET_FPS, DEFAULTS.MAX_WINDOWS),
    onSuccess: (data) => {
      setAnalysisResult(data);
    },
    onError: () => {
      onError(ERROR_MESSAGES.ANALYSIS_FAILED);
    },
  });

  const handleAnalyze = () => {
    if (videoId && task) {
      analysisMutation.mutate({ id: videoId, task });
    }
  };

  if (!videoId) {
    return null;
  }

  const isComplete = analysisResult !== null;

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
      <h2 className="text-lg font-semibold text-white mb-4">
        Step 2 — Analyze Video
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="task-description" className="block text-sm font-medium text-gray-400 mb-2">
            Task Description
          </label>
          <input
            id="task-description"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="e.g. picking up cup, rotating handle"
            aria-label="Task description for video analysis"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleAnalyze}
          disabled={!task || analysisMutation.isPending}
          aria-label={analysisMutation.isPending ? 'Analyzing video' : 'Analyze actions in video'}
          className="px-5 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
        >
          {analysisMutation.isPending ? 'Analyzing...' : 'Analyze Actions'}
        </button>

        {analysisMutation.isPending && (
          <div className="space-y-1">
            <p className="text-xs text-gray-500">Running Gemini vision analysis...</p>
            <div className="w-full bg-gray-200 rounded-full h-2" role="progressbar" aria-label="Analysis progress">
              <div className="bg-green-500 h-2 rounded-full animate-pulse w-1/2" />
            </div>
          </div>
        )}

        {isComplete && localVideoUrl && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <p className="text-sm text-green-600 font-medium" role="status">
                Analysis complete!
              </p>
              {analysisResult.stored_in_vector_db && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  Stored in vector DB
                </span>
              )}
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 bg-black">
              <video
                src={localVideoUrl}
                controls
                aria-label="Analyzed video playback"
                className="w-full max-h-72 object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
