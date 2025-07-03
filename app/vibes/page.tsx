"use client";

import { useState, memo, useCallback, useMemo } from "react";
import { Navigation } from "@/components/ui/navigation";

// Podcast data with the requested YouTube videos
const podcastEpisodes = [
  {
    id: 1,
    title: "Sustainable Living",
    description: "Reducing your carbon footprint",
    youtubeId: "PZoz8zfmhq0",
    startTime: 300,
    duration: "45:22"
  },
  {
    id: 2,
    title: "Community Conservation",
    description: "Local environmental efforts",
    youtubeId: "CDdree8PcIE",
    startTime: 1260,
    duration: "38:15"
  },
  {
    id: 3,
    title: "Tech for Good",
    description: "Innovative solutions",
    youtubeId: "KpxbgsBP4Ok",
    startTime: 420,
    duration: "52:40"
  }
];

// Memoized video player component
const VideoPlayer = memo(({ youtubeId, startTime, title }: { 
  youtubeId: string;
  startTime: number;
  title: string;
}) => (
  <div className="aspect-square w-full max-w-md bg-zinc-900 relative">
    <iframe
      src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}&autoplay=0&controls=1&modestbranding=1&rel=0`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="absolute inset-0 w-full h-full"
      loading="lazy"
    />
  </div>
));

// Ensure component has displayName for better debugging in React DevTools
VideoPlayer.displayName = "VideoPlayer";

// Memoized typography component
const SpacedTypography = memo(() => (
  <div className="space-y-1 tracking-wider">
    <div className="flex space-x-8">
      <span className="text-white text-xl md:text-2xl">w</span>
      <span className="text-white text-xl md:text-2xl">e</span>
    </div>
    
    <div>
      <span className="text-white text-xl md:text-2xl block">believe</span>
      <span className="text-white text-xl md:text-2xl block">in</span>
      <span className="text-white text-xl md:text-2xl block">the</span>
    </div>
    
    <div className="flex space-x-8">
      <span className="text-white text-xl md:text-2xl">p</span>
      <span className="text-white text-xl md:text-2xl">o</span>
      <span className="text-white text-xl md:text-2xl">w</span>
      <span className="text-white text-xl md:text-2xl">e</span>
      <span className="text-white text-xl md:text-2xl">r</span>
    </div>
    
    <div className="flex space-x-8">
      <span className="text-white text-xl md:text-2xl">o</span>
      <span className="text-white text-xl md:text-2xl">f</span>
    </div>
    
    <div className="flex space-x-8">
      <span className="text-white text-xl md:text-2xl">c</span>
      <span className="text-white text-xl md:text-2xl">o</span>
      <span className="text-white text-xl md:text-2xl">l</span>
      <span className="text-white text-xl md:text-2xl">l</span>
      <span className="text-white text-xl md:text-2xl">e</span>
      <span className="text-white text-xl md:text-2xl">c</span>
      <span className="text-white text-xl md:text-2xl">t</span>
      <span className="text-white text-xl md:text-2xl">i</span>
      <span className="text-white text-xl md:text-2xl">v</span>
      <span className="text-white text-xl md:text-2xl">e</span>
    </div>
    
    <div className="flex space-x-8">
      <span className="text-white text-xl md:text-2xl">a</span>
      <span className="text-white text-xl md:text-2xl">c</span>
      <span className="text-white text-xl md:text-2xl">t</span>
      <span className="text-white text-xl md:text-2xl">i</span>
      <span className="text-white text-xl md:text-2xl">o</span>
      <span className="text-white text-xl md:text-2xl">n</span>
    </div>
  </div>
));

// Ensure component has displayName for better debugging in React DevTools
SpacedTypography.displayName = "SpacedTypography";

// Memoized episode selector component
const EpisodeSelector = memo(({ 
  currentEpisode, 
  onChange 
}: { 
  currentEpisode: number;
  onChange: (index: number) => void;
}) => (
  <div className="flex space-x-2 mt-8">
    {podcastEpisodes.map((_, index) => (
      <button 
        key={index} 
        className={`w-2 h-2 rounded-full ${index === currentEpisode ? 'bg-white' : 'bg-gray-600'}`}
        onClick={() => onChange(index)}
        aria-label={`Select podcast episode ${index + 1}`}
      />
    ))}
  </div>
));

EpisodeSelector.displayName = "EpisodeSelector";

export default function VibesPage() {
  const [currentEpisode, setCurrentEpisode] = useState(0);
  
  // Use the current podcast for the main video display
  const mainEpisode = useMemo(() => podcastEpisodes[currentEpisode], [currentEpisode]);
  
  // Use useCallback for event handlers to prevent unnecessary re-renders
  const handleEpisodeChange = useCallback((index: number) => {
    setCurrentEpisode(index);
  }, []);
  
  return (
    <div className="h-screen bg-black flex flex-col justify-between overflow-hidden">
      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-4 flex md:flex-row flex-col items-center">
          {/* Left section - Podcast video embed */}
          <div className="md:w-1/2 p-4 flex items-center justify-center">
            <VideoPlayer 
              youtubeId={mainEpisode.youtubeId}
              startTime={mainEpisode.startTime}
              title={mainEpisode.title}
            />
          </div>
          
          {/* Right section - Typography */}
          <div className="md:w-1/2 p-4 flex flex-col items-start justify-center">
            <SpacedTypography />
            
            {/* Episode selector - Small dots */}
            <EpisodeSelector 
              currentEpisode={currentEpisode}
              onChange={handleEpisodeChange}
            />
              </div>
        </div>
      </main>

      {/* Navigation - Similar to other pages */}
      <Navigation />
      </div>
  );
}
