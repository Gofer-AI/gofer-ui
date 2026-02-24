import { useMutation } from '@tanstack/react-query';
import { uploadVideoLabLab } from '../../api/client';
import { useVideo } from '../../context';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../../constants';

/**
 * Props for UploadMode component
 */
interface UploadModeProps {
  /** Callback when video file is selected */
  onFileSelected: (file: File) => void;
  /** Callback when error occurs */
  onError: (error: string) => void;
}

/**
 * UploadMode Component
 *
 * Handles video file selection and upload to backend.
 * Displays video preview and upload progress.
 *
 * @param onFileSelected - Called when user selects a video file
 * @param onError - Called when upload fails
 */
export default function UploadMode({ onFileSelected, onError }: UploadModeProps) {
  const { videoFile, localVideoUrl, videoId, setVideoFile, setVideoId } = useVideo();

  const uploadMutation = useMutation({
    mutationFn: uploadVideoLabLab,
    onSuccess: (data) => {
      setVideoId(data.video_id);
    },
    onError: () => {
      onError(ERROR_MESSAGES.UPLOAD_FAILED);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setVideoId(null);
      onFileSelected(file);
    }
  };

  const handleUpload = () => {
    if (videoFile) {
      uploadMutation.mutate(videoFile);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        aria-label="Select video file to upload"
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0
          file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100 cursor-pointer"
      />

      {localVideoUrl && (
        <div className="rounded-lg overflow-hidden border border-gray-200 bg-black">
          <video
            src={localVideoUrl}
            controls
            aria-label="Video preview"
            className="w-full max-h-72 object-contain"
          />
        </div>
      )}

      {videoFile && !videoId && (
        <button
          onClick={handleUpload}
          disabled={uploadMutation.isPending}
          aria-label={uploadMutation.isPending ? 'Uploading video' : 'Upload video'}
          className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {uploadMutation.isPending ? 'Uploading...' : 'Upload Video'}
        </button>
      )}

      {uploadMutation.isPending && (
        <div className="w-full bg-gray-200 rounded-full h-2" role="progressbar" aria-label="Upload progress">
          <div className="bg-blue-600 h-2 rounded-full animate-pulse w-3/4" />
        </div>
      )}

      {videoId && (
        <p className="text-sm text-green-600 font-medium" role="status">
          {SUCCESS_MESSAGES.UPLOAD_COMPLETE}
        </p>
      )}
    </div>
  );
}
