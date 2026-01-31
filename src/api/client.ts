import { API_BASE_URL } from '../constants';
import type {
  SearchParams,
  SearchResponse,
  UploadResponse,
  VideoClipInfo,
  ClipRequest,
  BatchImportResponse
} from '../types';

interface FreeMoCapStatusResponse {
  session_id: string;
  status: string;
  progress?: number;
  message?: string;
  error?: string;
}

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

export async function checkAPIStatus(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE_URL}/search/stats`);
    return res.ok;
  } catch {
    return false;
  }
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
