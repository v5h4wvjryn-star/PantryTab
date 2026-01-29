import { Play } from 'lucide-react';
import { useRef, useState } from 'react';

export default function VideoOverview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            See Pantry Tab in action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Watch a quick overview of how Pantry Tab helps you organize your
            kitchen, reduce waste, and plan meals effortlessly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              preload="metadata"
              playsInline
              poster=""
            >
              <source
                src={`${import.meta.env.BASE_URL}Pantry_Tab_Overview.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer group"
                aria-label="Play overview video"
              >
                <div className="w-20 h-20 rounded-full bg-orange-brand flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
