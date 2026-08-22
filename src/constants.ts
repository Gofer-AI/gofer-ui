/**
 * Application Constants
 *
 * Centralized configuration for the Gofer AI application.
 * All magic strings, configuration values, and constants should be defined here.
 */

// ============================================================================
// API Configuration
// ============================================================================

/** Base URL for the backend API */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

/** API request timeout values (in milliseconds) */
export const API_TIMEOUTS = {
  UPLOAD: 5 * 60 * 1000,      // 5 minutes
  ANALYSIS: 10 * 60 * 1000,   // 10 minutes
  HEALTH_CHECK: 5 * 1000,     // 5 seconds
  DEFAULT: 30 * 1000,         // 30 seconds
} as const;

/** SSE (Server-Sent Events) configuration */
export const SSE_CONFIG = {
  COMPLETED_MESSAGE_DELAY: 2000,  // Keep completed message visible for 2s
  ERROR_MESSAGE_DELAY: 5000,      // Keep error message visible for 5s
} as const;

// ============================================================================
// Action Primitives
// ============================================================================

/** Valid action primitive types for video analysis */
export const ACTION_PRIMITIVES = [
  'reach',
  'grasp',
  'lift',
  'place',
  'push',
  'pull',
  'rotate',
  'walk',
  'turn',
  'release',
  'hold',
  'other',
] as const;

export type ActionPrimitiveType = typeof ACTION_PRIMITIVES[number];

/** Color mapping for action primitives (Tailwind CSS classes) */
export const ACTION_PRIMITIVE_COLORS: Record<ActionPrimitiveType, string> = {
  reach: 'bg-blue-100 text-blue-800',
  grasp: 'bg-green-100 text-green-800',
  lift: 'bg-purple-100 text-purple-800',
  place: 'bg-yellow-100 text-yellow-800',
  push: 'bg-orange-100 text-orange-800',
  pull: 'bg-pink-100 text-pink-800',
  rotate: 'bg-indigo-100 text-indigo-800',
  walk: 'bg-teal-100 text-teal-800',
  turn: 'bg-cyan-100 text-cyan-800',
  release: 'bg-red-100 text-red-800',
  hold: 'bg-emerald-100 text-emerald-800',
  other: 'bg-gray-100 text-gray-800',
};

/** Display labels for action primitives */
export const ACTION_PRIMITIVE_LABELS: Record<ActionPrimitiveType, string> = {
  reach: 'Reach',
  grasp: 'Grasp',
  lift: 'Lift',
  place: 'Place',
  push: 'Push',
  pull: 'Pull',
  rotate: 'Rotate',
  walk: 'Walk',
  turn: 'Turn',
  release: 'Release',
  hold: 'Hold',
  other: 'Other',
};

// ============================================================================
// Hand Types
// ============================================================================

/** Valid hand types for action primitives */
export const HAND_TYPES = ['left', 'right', 'both'] as const;

export type HandType = typeof HAND_TYPES[number];

/** Display labels for hand types */
export const HAND_LABELS: Record<HandType, string> = {
  left: 'Left Hand',
  right: 'Right Hand',
  both: 'Both Hands',
};

// ============================================================================
// Video Processing Status
// ============================================================================

/** Valid video processing status values */
export const VIDEO_STATUS = {
  QUEUED: 'queued',
  DOWNLOADING: 'downloading',
  EXTRACTING_FRAMES: 'extracting_frames',
  ANALYZING_FRAMES: 'analyzing_frames',
  TRANSCRIBING_AUDIO: 'transcribing_audio',
  GENERATING_EMBEDDINGS: 'generating_embeddings',
  INDEXING: 'indexing',
  COMPLETED: 'completed',
  FAILED: 'failed',
  PROCESSING: 'processing',
  INDEXED: 'indexed',
} as const;

export type VideoStatusType = typeof VIDEO_STATUS[keyof typeof VIDEO_STATUS];

/** Status display configuration for processing status UI */
export const STATUS_CONFIG: Record<string, { label: string; color: string; icon: string }> = {
  [VIDEO_STATUS.QUEUED]: {
    label: 'Queued',
    color: 'bg-gray-100 text-gray-800',
    icon: ''
  },
  [VIDEO_STATUS.DOWNLOADING]: {
    label: 'Downloading',
    color: 'bg-blue-100 text-blue-800',
    icon: ''
  },
  [VIDEO_STATUS.EXTRACTING_FRAMES]: {
    label: 'Extracting Frames',
    color: 'bg-purple-100 text-purple-800',
    icon: ''
  },
  [VIDEO_STATUS.ANALYZING_FRAMES]: {
    label: 'Analyzing',
    color: 'bg-indigo-100 text-indigo-800',
    icon: ''
  },
  [VIDEO_STATUS.TRANSCRIBING_AUDIO]: {
    label: 'Transcribing Audio',
    color: 'bg-yellow-100 text-yellow-800',
    icon: ''
  },
  [VIDEO_STATUS.GENERATING_EMBEDDINGS]: {
    label: 'Generating Embeddings',
    color: 'bg-pink-100 text-pink-800',
    icon: ''
  },
  [VIDEO_STATUS.INDEXING]: {
    label: 'Indexing',
    color: 'bg-teal-100 text-teal-800',
    icon: ''
  },
  [VIDEO_STATUS.COMPLETED]: {
    label: 'Completed',
    color: 'bg-green-100 text-green-800',
    icon: ''
  },
  [VIDEO_STATUS.FAILED]: {
    label: 'Failed',
    color: 'bg-red-100 text-red-800',
    icon: ''
  },
};

// ============================================================================
// Example Queries
// ============================================================================

/** Example search queries for robotics imitation learning */
export const EXAMPLE_QUERIES = [
  "person reaching for object",
  "grasping a bottle",
  "lifting an object",
  "hand holding tumbler",
  "person standing still",
  "object on counter"
] as const;

// ============================================================================
// Default Values
// ============================================================================

/** Default values for various features */
export const DEFAULTS = {
  SEARCH_TOP_K: 5,
  MAX_SEARCH_RESULTS: 20,
  TARGET_FPS: 1,
  MAX_WINDOWS: 10,
  VIDEO_ANALYSIS_TASK: 'Analyze the actions and objects in this video',
} as const;

// ============================================================================
// Session Storage Keys
// ============================================================================

/** Keys for sessionStorage */
export const STORAGE_KEYS = {
  USER: 'gofer_user',
} as const;

// ============================================================================
// Routes
// ============================================================================

/** Application route paths */
export const ROUTES = {
  HOME: '/',
  DEMO_LOGIN: '/demo-login',
  APP: '/app',
} as const;

// ============================================================================
// UI Constants
// ============================================================================

/** UI-related constants */
export const UI = {
  MAX_FILE_SIZE_MB: 500,
  SUPPORTED_VIDEO_FORMATS: ['.mp4', '.avi', '.mov', '.mkv', '.webm'],
  PROGRESS_BAR_ANIMATION_DURATION: 500, // milliseconds
} as const;

// ============================================================================
// Error Messages
// ============================================================================

/** Standard error messages */
export const ERROR_MESSAGES = {
  API_CONNECTION_FAILED: 'Unable to connect to API',
  FILE_TOO_LARGE: 'File size exceeds maximum allowed size',
  UNSUPPORTED_FORMAT: 'Unsupported video format',
  UPLOAD_FAILED: 'Video upload failed',
  ANALYSIS_FAILED: 'Video analysis failed',
  SEARCH_FAILED: 'Search request failed',
  AUTH_FAILED: 'Authentication failed',
  INVALID_CREDENTIALS: 'Invalid credentials',
} as const;

// ============================================================================
// Success Messages
// ============================================================================

/** Standard success messages */
export const SUCCESS_MESSAGES = {
  UPLOAD_COMPLETE: 'Video uploaded successfully',
  ANALYSIS_COMPLETE: 'Video analysis completed',
  SEARCH_COMPLETE: 'Search completed',
  PROCESSING_COMPLETE: 'Video processed successfully! You can now search for actions in this video.',
} as const;
