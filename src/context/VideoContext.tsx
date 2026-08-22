import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { LabLabAnalysisResponse, R2R2RResponse } from '../types';

/**
 * Video state interface
 */
interface VideoState {
  /** Currently selected video file */
  videoFile: File | null;
  /** Local object URL for video preview */
  localVideoUrl: string | null;
  /** Video ID from backend after upload */
  videoId: string | null;
  /** Task description for analysis */
  task: string;
  /** Analysis results from backend */
  analysisResult: LabLabAnalysisResponse | null;
  /** R2R2R processing results */
  r2r2rResult: R2R2RResponse | null;
}

/**
 * Video context actions interface
 */
interface VideoContextValue extends VideoState {
  /** Set the selected video file */
  setVideoFile: (file: File | null) => void;
  /** Set the video ID */
  setVideoId: (id: string | null) => void;
  /** Set the task description */
  setTask: (task: string) => void;
  /** Set analysis results */
  setAnalysisResult: (result: LabLabAnalysisResponse | null) => void;
  /** Set R2R2R results */
  setR2r2rResult: (result: R2R2RResponse | null) => void;
  /** Reset all video state */
  resetVideoState: () => void;
}

const VideoContext = createContext<VideoContextValue | undefined>(undefined);

/**
 * Props for VideoProvider component
 */
interface VideoProviderProps {
  children: ReactNode;
}

/**
 * VideoProvider Component
 *
 * Provides video-related state and actions to the application.
 * Manages video file selection, upload state, analysis results, and R2R2R processing.
 *
 * @param children - Child components that will have access to video context
 */
export function VideoProvider({ children }: VideoProviderProps) {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [task, setTask] = useState('');
  const [analysisResult, setAnalysisResult] = useState<LabLabAnalysisResponse | null>(null);
  const [r2r2rResult, setR2r2rResult] = useState<R2R2RResponse | null>(null);

  // Create local preview URL when file is selected
  useEffect(() => {
    if (videoFile) {
      const url = URL.createObjectURL(videoFile);
      setLocalVideoUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setLocalVideoUrl(null);
    }
  }, [videoFile]);

  /**
   * Reset all video-related state
   */
  const resetVideoState = () => {
    setVideoFile(null);
    setVideoId(null);
    setTask('');
    setAnalysisResult(null);
    setR2r2rResult(null);
  };

  const value: VideoContextValue = {
    videoFile,
    localVideoUrl,
    videoId,
    task,
    analysisResult,
    r2r2rResult,
    setVideoFile,
    setVideoId,
    setTask,
    setAnalysisResult,
    setR2r2rResult,
    resetVideoState,
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}

/**
 * Hook to access video context
 *
 * @returns Video context value
 * @throws Error if used outside VideoProvider
 */
export function useVideo(): VideoContextValue {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
}
