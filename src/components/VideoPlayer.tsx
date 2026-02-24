import { useRef, useImperativeHandle, forwardRef } from 'react';

/**
 * Props for VideoPlayer component
 */
interface VideoPlayerProps {
  /** URL of the video to play */
  videoUrl?: string;
  /** Optional title to display below the video */
  title?: string;
}

/**
 * Imperative handle interface for VideoPlayer ref
 */
export interface VideoPlayerRef {
  /** Seek to a specific time in the video and start playing */
  seekTo: (time: number) => void;
}

/**
 * VideoPlayer Component
 *
 * HTML5 video player with ref-based controls for programmatic seeking.
 * Displays a placeholder when no video URL is provided.
 *
 * @example
 * ```tsx
 * const playerRef = useRef<VideoPlayerRef>(null);
 *
 * // Seek to timestamp
 * playerRef.current?.seekTo(30.5);
 *
 * <VideoPlayer ref={playerRef} videoUrl={url} title="Demo Video" />
 * ```
 */
const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ videoUrl, title }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(ref, () => ({
      seekTo: (time: number) => {
        if (videoRef.current) {
          videoRef.current.currentTime = time;
          videoRef.current.play();
        }
      }
    }));

    if (!videoUrl) {
      return (
        <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Select a video to start</p>
        </div>
      );
    }

    return (
      <div className="w-full">
        <video
          ref={videoRef}
          className="w-full aspect-video bg-black rounded-lg"
          controls
          src={videoUrl}
        >
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>
        {title && (
          <h2 className="mt-2 text-lg font-semibold text-gray-900">{title}</h2>
        )}
      </div>
    );
  }
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
