// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

// Example queries for robotics imitation learning
export const EXAMPLE_QUERIES = [
  "person reaching for object",
  "grasping a bottle",
  "lifting an object",
  "hand holding tumbler",
  "person standing still",
  "object on counter"
];

// Example task names
export const EXAMPLE_TASKS = [
  "pick_up_cup",
  "grasp_bottle",
  "pour_water",
  "open_door",
  "place_object",
  "reach_and_grasp"
];
