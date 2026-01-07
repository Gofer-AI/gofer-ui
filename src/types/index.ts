export interface Video {
  id: string;              // UUID
  title: string;
  source_url?: string;     // Video file URL for uploaded videos
  duration_seconds: number;
  thumbnail_url: string;
  status: "processing" | "indexed" | "failed";
  created_at: string;      // ISO timestamp
  segment_count: number;
}

export interface SearchResult {
  segment_id: string;
  video_id: string;
  video_title: string;
  start_time: number;            // seconds
  end_time: number;              // seconds
  score: number;                 // similarity score 0-1
  thumbnail_url: string;
  visual_context: string;        // text description from Azure AI Vision
  transcript_snippet?: string;   // optional
  ai_summary?: string;          // optional GPT-4o summary (only if include_summary=true)
}

export interface SearchParams {
  query: string;
  video_id?: string;        // optional: search within specific video
  top_k?: number;           // default: 10
  include_summary?: boolean // default: false
}

export interface SearchResponse {
  results: SearchResult[];
  query_time_ms: number;
}

export interface VideosResponse {
  videos: Video[];
}
