import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { uploadVideo } from '../api/client';

interface VideoUploadProps {
  onUploadSuccess: (jobId: string, taskName: string) => void;
}

export default function VideoUpload({ onUploadSuccess }: VideoUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const uploadMutation = useMutation({
    mutationFn: () => {
      if (!file || !taskName || !taskDescription) {
        throw new Error('Please fill in all fields');
      }
      return uploadVideo(file, taskName, taskDescription);
    },
    onSuccess: (data) => {
      onUploadSuccess(data.job_id, data.task_name);
      // Reset form
      setFile(null);
      setTaskName('');
      setTaskDescription('');
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    uploadMutation.mutate();
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Demonstration Video</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Task Name */}
        <div>
          <label htmlFor="taskName" className="block text-sm font-medium text-gray-700 mb-1">
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="pick_up_cup"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="mt-1 text-xs text-gray-500">
            Lowercase with underscores (e.g., pick_up_cup, grasp_bottle)
          </p>
        </div>

        {/* Task Description */}
        <div>
          <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700 mb-1">
            Task Description
          </label>
          <input
            type="text"
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Picking up a cup from a desk"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="mt-1 text-xs text-gray-500">
            Human-readable description of the task
          </p>
        </div>

        {/* File Upload */}
        <div>
          <label htmlFor="videoFile" className="block text-sm font-medium text-gray-700 mb-1">
            Video File
          </label>
          <input
            type="file"
            id="videoFile"
            onChange={handleFileChange}
            accept="video/*,.mp4,.mov,.avi,.mkv,.webm"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
          {file && (
            <p className="mt-2 text-sm text-gray-600">
              Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          )}
        </div>

        {/* Error Message */}
        {uploadMutation.isError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-800">
              {uploadMutation.error instanceof Error
                ? uploadMutation.error.message
                : 'Upload failed'}
            </p>
          </div>
        )}

        {/* Success Message */}
        {uploadMutation.isSuccess && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-800">
              ✓ Video uploaded successfully! Processing will begin shortly.
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={uploadMutation.isPending || !file || !taskName || !taskDescription}
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {uploadMutation.isPending ? 'Uploading...' : 'Upload Video'}
        </button>
      </form>
    </div>
  );
}
