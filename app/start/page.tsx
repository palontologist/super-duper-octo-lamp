"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Spline3D } from "@/components/magicui/spline-3d";
import { memo } from "react";
import { Navigation } from "@/components/ui/navigation";
import { WaitlistForm } from "@/components/ui/waitlist-form";

// Memoized 3D element to prevent unnecessary re-renders
const MemoizedSpline3D = memo(Spline3D);

// Community card component
const CommunityCard = memo(({ onDiscordClick }: { onDiscordClick: () => void }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
    <h3 className="text-lg font-medium text-white mb-2">Join Our Community</h3>
    <p className="text-sm text-gray-400 mb-3">Connect with like-minded individuals making an impact</p>
    
    <div className="space-y-2 mb-3">
      <div className="flex items-center text-sm">
        <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
          <span className="text-teal-400 text-xs">✓</span>
        </div>
        <span className="text-gray-300">Weekly impact challenges</span>
      </div>
      <div className="flex items-center text-sm">
        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
          <span className="text-blue-400 text-xs">✧</span>
        </div>
        <span className="text-gray-300">Exclusive content & resources</span>
      </div>
      <div className="flex items-center text-sm">
        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-2">
          <span className="text-purple-400 text-xs">♻️</span>
        </div>
        <span className="text-gray-300">Sustainable living tips</span>
      </div>
    </div>

    <Button 
      className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 h-10 text-sm z-20"
      onClick={onDiscordClick}
    >
      Join Discord Community
    </Button>
  </div>
));

export default function Page() {
  const handleDiscordClick = () => {
    window.open("https://discord.gg/AAPqTvHQ", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="h-screen bg-black flex flex-col justify-between overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Main content - centered vertically and horizontally */}
      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left Column - Personal Impact Tracking */}
          <motion.div 
              className="flex flex-col justify-center h-full"
              initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
              <h2 className="text-2xl sm:text-3xl font-medium text-white mb-2">Personal Impact Tracking</h2>
              <p className="text-gray-400 text-base sm:text-lg mb-4">SDG-aligned app coming soon</p>
            
              <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">→</span>
                <span>Map daily activities to UN SDGs</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">→</span>
                <span>Track carbon footprint through purchases</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">→</span>
                <span>See your impact grow over time</span>
              </li>
            </ul>

              <div className="mt-4 relative">
                <WaitlistForm />
            </div>
          </motion.div>

          {/* Right Column - Community & 3D Element */}
          <motion.div 
              className="flex flex-col justify-center h-full"
              initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* 3D Spline Element */}
              <div className="h-48 mb-3 pointer-events-none">
                <MemoizedSpline3D 
                scene="https://app.spline.design/file/7f09bdc4-93c5-496e-b9fe-3505948c7721" 
                className="w-full h-full"
              />
            </div>

              <CommunityCard onDiscordClick={handleDiscordClick} />
          </motion.div>
        </div>
      </div>
      </main>

      {/* Navigation */}
      <Navigation />
    </div>
  );
}
