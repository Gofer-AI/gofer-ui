import { API_BASE_URL } from '../constants';
import type { VideosResponse, SearchParams, SearchResponse } from '../types';

export async function fetchVideos(): Promise<VideosResponse> {
  const res = await fetch(`${API_BASE_URL}/api/v1/videos`);
  if (!res.ok) throw new Error('Failed to fetch videos');
  return res.json();
}

export async function searchVideos(params: SearchParams): Promise<SearchResponse> {
  const res = await fetch(`${API_BASE_URL}/api/v1/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  if (!res.ok) throw new Error('Search failed');
  return res.json();
}

export async function checkAPIStatus(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/videos`, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}
