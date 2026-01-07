import { useRef, useImperativeHandle, forwardRef } from 'react';

interface VideoPlayerProps {
  videoUrl?: string;
  title?: string;
}

export interface VideoPlayerRef {
  seekTo: (time: number) => void;
}

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
