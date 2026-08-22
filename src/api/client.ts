import {
  API_BASE_URL,
  API_TIMEOUTS,
  ERROR_MESSAGES,
  DEFAULTS
} from '../constants';
import type {
  SearchParams,
  SearchResponse,
  UploadResponse,
  VideoClipInfo,
  ClipRequest,
  BatchImportResponse,
  LabLabUploadResponse,
  LabLabAnalysisResponse,
  SearchResultsResponse,
  R2R2RResponse
} from '../types';

/**
 * API Client Module
 *
 * Provides functions for interacting with the Gofer AI backend API.
 * Includes LabLab endpoints, semantic search, FreeMoCap integration, and legacy endpoints.
 */

// ============================================================================
// Semantic Search
// ============================================================================

/**
 * Search videos using semantic query
 *
 * @param query - Natural language search query
 * @param top_k - Number of results to return (default: 5)
 * @returns Promise with search results
 */
export async function semanticSearch(query: string, top_k: number = DEFAULTS.SEARCH_TOP_K): Promise<SearchResultsResponse> {
  const res = await fetch(`${API_BASE_URL}/search_videos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, top_k }),
  });
  if (!res.ok) throw new Error(ERROR_MESSAGES.SEARCH_FAILED);
  return res.json();
}

// ============================================================================
// R2R2R Processing
// ============================================================================

/**
 * Process video through R2R2R pipeline
 *
 * @param file - Video file to process
 * @returns Promise with R2R2R response including output URLs
 */
export async function processR2R2R(file: File): Promise<R2R2RResponse> {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${API_BASE_URL}/r2r2r`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error(ERROR_MESSAGES.ANALYSIS_FAILED);
  return res.json();
}

// ============================================================================
// Download URLs
// ============================================================================

/**
 * Get download URL for processed video
 *
 * @param videoId - Video ID
 * @returns URL string for downloading video
 */
export function getVideoDownloadUrl(videoId: string): string {
  return `${API_BASE_URL}/download/video/${videoId}`;
}

/**
 * Get download URL for HDF file
 *
 * @param videoId - Video ID
 * @returns URL string for downloading HDF file
 */
export function getHDFDownloadUrl(videoId: string): string {
  return `${API_BASE_URL}/download/hdf/${videoId}`;
}

/**
 * FreeMoCap status response structure
 */
interface FreeMoCapStatusResponse {
  session_id: string;
  status: string;
  progress?: number;
  message?: string;
  error?: string;
}

// ============================================================================
// LabLab Backend API Functions
// ============================================================================

/**
 * Upload video to LabLab backend
 *
 * @param file - Video file to upload
 * @returns Promise with upload response containing video_id and path
 * @throws Error if upload fails or times out
 */
export async function uploadVideoLabLab(file: File): Promise<LabLabUploadResponse> {
  const formData = new FormData();
  formData.append('file', file);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), API_TIMEOUTS.UPLOAD);

  try {
    const res = await fetch(`${API_BASE_URL}/upload_video`, {
      method: 'POST',
      body: formData,
      signal: controller.signal,
    });

    if (!res.ok) throw new Error(ERROR_MESSAGES.UPLOAD_FAILED);
    return res.json();
  } catch (err) {
    if ((err as Error).name === 'AbortError') {
      throw new Error('Upload timed out. Try a smaller video file.');
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Analyze video with Gemini Vision to detect action primitives
 *
 * @param videoId - ID of uploaded video
 * @param task - Task description for analysis
 * @param targetFps - Target FPS for frame sampling (default: 1)
 * @param maxWindows - Maximum number of temporal windows to analyze (default: 10)
 * @returns Promise with analysis response containing action primitives and objects
 * @throws Error if analysis fails or times out
 */
export async function analyzeVideo(
  videoId: string,
  task: string,
  targetFps: number = DEFAULTS.TARGET_FPS,
  maxWindows: number = DEFAULTS.MAX_WINDOWS
): Promise<LabLabAnalysisResponse> {
  const params = new URLSearchParams({
    video_id: videoId,
    task: task,
    target_fps: targetFps.toString(),
    max_windows: maxWindows.toString()
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), API_TIMEOUTS.ANALYSIS);

  try {
    const res = await fetch(`${API_BASE_URL}/analyze_video?${params}`, {
      method: 'POST',
      signal: controller.signal,
    });

    if (!res.ok) throw new Error(ERROR_MESSAGES.ANALYSIS_FAILED);
    return res.json();
  } catch (err) {
    if ((err as Error).name === 'AbortError') {
      throw new Error('Analysis timed out. Try reducing max windows or video length.');
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Check if backend API is healthy and responding
 *
 * @returns Promise with boolean indicating API health status
 */
export async function checkAPIStatus(): Promise<boolean> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), API_TIMEOUTS.HEALTH_CHECK);

  try {
    const res = await fetch(`${API_BASE_URL}/`, { signal: controller.signal });
    if (!res.ok) return false;
    const data = await res.json();
    return data.status === 'ok';
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

// ============================================================================
// Legacy API Functions (kept for backward compatibility)
// ============================================================================

/**
 * Search video frames using semantic query (legacy endpoint)
 *
 * @param params - Search parameters including query and filters
 * @returns Promise with search response
 * @deprecated Use semanticSearch instead
 */
export async function searchFrames(params: SearchParams): Promise<SearchResponse> {
  const res = await fetch(`${API_BASE_URL}/search/videos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  if (!res.ok) throw new Error(ERROR_MESSAGES.SEARCH_FAILED);
  return res.json();
}

/**
 * Upload video with task metadata (legacy endpoint)
 *
 * @param file - Video file to upload
 * @param taskName - Name of the task
 * @param taskDescription - Description of the task
 * @returns Promise with upload response
 * @deprecated Use uploadVideoLabLab instead
 */
export async function uploadVideo(
  file: File,
  taskName: string,
  taskDescription: string
): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('task_name', taskName);
  formData.append('task_description', taskDescription);

  const res = await fetch(`${API_BASE_URL}/videos/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || ERROR_MESSAGES.UPLOAD_FAILED);
  }

  return res.json();
}

/**
 * Get streaming URL for video playback
 *
 * @param videoId - Video ID
 * @returns URL string for video streaming
 */
export function getVideoStreamUrl(videoId: string): string {
  return `${API_BASE_URL}/videos/stream/${videoId}`;
}

/**
 * Get video clip information for a specific timestamp
 *
 * @param videoId - Video ID
 * @param timestamp - Timestamp in seconds
 * @param buffer - Buffer time around timestamp (default: 2.0 seconds)
 * @returns Promise with video clip information
 */
export async function getVideoClip(videoId: string, timestamp: number, buffer: number = 2.0): Promise<VideoClipInfo> {
  const res = await fetch(`${API_BASE_URL}/videos/${videoId}/clip?timestamp=${timestamp}&buffer=${buffer}`);
  if (!res.ok) throw new Error('Failed to fetch video clip');
  return res.json();
}

// ============================================================================
// FreeMoCap Integration
// ============================================================================

/**
 * Batch process video clips for FreeMoCap 3D pose estimation
 *
 * @param clips - Array of clip requests with video ID and time ranges
 * @param freemocapEndpoint - Optional custom FreeMoCap endpoint URL
 * @returns Promise with batch import response
 */
export async function batchProcessClipsForFreeMoCap(
  clips: ClipRequest[],
  freemocapEndpoint?: string
): Promise<BatchImportResponse> {
  const res = await fetch(`${API_BASE_URL}/clips/batch-import-to-freemocap`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      clips,
      freemocap_endpoint: freemocapEndpoint,
      processing_params: {
        extract_3d_pose: true,
        output_format: "json",
        fps: 30
      }
    })
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || 'Failed to submit batch');
  }

  return res.json();
}

/**
 * Get FreeMoCap processing status for a session
 *
 * @param sessionId - FreeMoCap session ID
 * @returns Promise with status response
 */
export async function getFreeMoCapStatus(sessionId: string): Promise<FreeMoCapStatusResponse> {
  const res = await fetch(`${API_BASE_URL}/freemocap/status/${sessionId}`);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || 'Failed to get status');
  }

  return res.json();
}
