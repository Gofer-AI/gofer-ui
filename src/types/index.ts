export interface Video {
  video_id: string;         // UUID
  task_name: string;        // e.g., "pick_up_cup"
  task_description: string; // e.g., "Picking up a cup from desk"
  filename: string;
  blob_url: string;
  size_mb: number;
  uploaded_at: string;      // ISO timestamp
  status: "queued" | "processing" | "indexed" | "failed";
}

export interface FrameResult {
  frame_id: string;
  video_id: string;
  task_name: string;
  task_description: string;
  video_filename: string;
  blob_url: string;
  frame_number: number;
  timestamp: number;            // seconds
  description: string;          // multimodal description
  similarity_score: number;     // 0-1
}

export interface SearchParams {
  query: string;
  video_id?: string;        // optional: filter by specific video
  task_name?: string;       // optional: filter by task
  top_k?: number;           // default: 5
}

export interface SearchResponse {
  query: string;
  results: FrameResult[];
  total: number;
}

export interface VideoListResponse {
  videos: Video[];
  total: number;
}

export interface UploadResponse {
  job_id: string;
  task_name: string;
  task_description: string;
  status: string;
  message: string;
}

export interface VideoClipInfo {
  video_url: string;
  clip_start: number;
  clip_end: number;
  seek_to: number;
  duration: number;
  video_id: string;
  task_name: string;
  task_description: string;
}

// FreeMoCap Types - aligned with existing backend models
export interface ClipRequest {
  video_id: string;
  start_time: number;
  end_time: number;
  task_name: string;
  task_description: string;
}

export interface ClipResult {
  clip_id: string | null;
  video_id: string;
  start_time: number;
  end_time: number;
  clip_url: string | null;
  job_id: string | null;
  status: string;  // "sent" or "failed"
  error: string | null;
}

export interface BatchImportResponse {
  batch_id: string;
  total_clips: number;
  submitted: number;
  failed: number;
  results: ClipResult[];
  message: string;
}

// Semantic Search Result (matches /search_videos response)
export interface SearchResult {
  video_id: string;
  similarity: number;
  task: string;
  objects: string[];
  actions: string[];
  created_at: string;
  video_url?: string;
}

export interface SearchResultsResponse {
  query: string;
  top_k: number;
  results: SearchResult[];
}

// R2R2R Response
export interface R2R2RResponse {
  video_id: string;
  output_video: string;
  output_hdf: string;
  backend_metadata: Record<string, unknown>;
}

// LabLab Backend Types
export interface ActionPrimitive {
  primitive: "reach" | "grasp" | "lift" | "place" | "push" | "pull" | "rotate" | "walk" | "turn" | "release" | "hold" | "other";
  args: {
    acted_object: string | null;
    hand: "left" | "right" | "both" | null;
    direction: string | null;
  };
  confidence: number;
}

export interface WindowResult {
  start_time_sec: number;
  end_time_sec: number;
  action_primitives: ActionPrimitive[];
  scene_objects: string[];
  notes: string | null;
}

export interface LabLabUploadResponse {
  video_id: string;
  path: string;
}

export interface LabLabAnalysisResponse {
  video_id: string;
  video_path: string;
  native_fps: number;
  target_fps: number;
  sample_step: number;
  num_keyframes: number;
  num_windows: number;
  window_results: WindowResult[];
  aggregated_analysis?: {
    task: string;
    actions: string[];
    objects: string[];
    duration_sec: number;
  };
  stored_in_vector_db?: boolean;
}
