import { API_BASE_URL } from '../constants';
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

export async function semanticSearch(query: string, top_k: number = 5): Promise<SearchResultsResponse> {
  const res = await fetch(`${API_BASE_URL}/search_videos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, top_k }),
  });
  if (!res.ok) throw new Error('Search failed');
  return res.json();
}

export async function processR2R2R(file: File): Promise<R2R2RResponse> {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${API_BASE_URL}/r2r2r`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('R2R2R processing failed');
  return res.json();
}

export function getVideoDownloadUrl(videoId: string): string {
  return `${API_BASE_URL}/download/video/${videoId}`;
}

export function getHDFDownloadUrl(videoId: string): string {
  return `${API_BASE_URL}/download/hdf/${videoId}`;
}

interface FreeMoCapStatusResponse {
  session_id: string;
  status: string;
  progress?: number;
  message?: string;
  error?: string;
}

// LabLab Backend API Functions
export async function uploadVideoLabLab(file: File): Promise<LabLabUploadResponse> {
  const formData = new FormData();
  formData.append('file', file);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5 * 60 * 1000); // 5 min timeout

  try {
    const res = await fetch(`${API_BASE_URL}/upload_video`, {
      method: 'POST',
      body: formData,
      signal: controller.signal,
    });

    if (!res.ok) throw new Error('Upload failed');
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

export async function analyzeVideo(
  videoId: string,
  task: string,
  targetFps: number = 3.0,
  maxWindows: number = 8
): Promise<LabLabAnalysisResponse> {
  const params = new URLSearchParams({
    video_id: videoId,
    task: task,
    target_fps: targetFps.toString(),
    max_windows: maxWindows.toString()
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10 * 60 * 1000); // 10 min timeout

  try {
    const res = await fetch(`${API_BASE_URL}/analyze_video?${params}`, {
      method: 'POST',
      signal: controller.signal,
    });

    if (!res.ok) throw new Error('Analysis failed');
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

export async function checkAPIStatus(): Promise<boolean> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000); // 5 second timeout

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

// Legacy API Functions (kept for backward compatibility if needed)
export async function searchFrames(params: SearchParams): Promise<SearchResponse> {
  const res = await fetch(`${API_BASE_URL}/search/videos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  if (!res.ok) throw new Error('Search failed');
  return res.json();
}

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
    throw new Error(error.detail || 'Upload failed');
  }

  return res.json();
}

export function getVideoStreamUrl(videoId: string): string {
  return `${API_BASE_URL}/videos/stream/${videoId}`;
}

export async function getVideoClip(videoId: string, timestamp: number, buffer: number = 2.0): Promise<VideoClipInfo> {
  const res = await fetch(`${API_BASE_URL}/videos/${videoId}/clip?timestamp=${timestamp}&buffer=${buffer}`);
  if (!res.ok) throw new Error('Failed to fetch video clip');
  return res.json();
}

// FreeMoCap Integration - uses existing /clips/batch-import-to-freemocap endpoint
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

export async function getFreeMoCapStatus(sessionId: string): Promise<FreeMoCapStatusResponse> {
  const res = await fetch(`${API_BASE_URL}/freemocap/status/${sessionId}`);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || 'Failed to get status');
  }

  return res.json();
}
