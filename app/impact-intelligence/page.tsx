"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

export default function ImpactIntelligencePage() {
  return (
    <div className="w-full min-h-screen bg-[#111] text-white overflow-hidden relative flex flex-col items-center justify-center py-12 md:py-0">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-white/10"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-20 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 md:mb-6">
            Impact Intelligence
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            A newsletter and podcast on how impact, capital, and technology are turning into real infrastructure—not just PR stories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Button
              asChild
              className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full font-bold px-6 md:px-8 py-3 md:py-6 text-base md:text-lg"
            >
              <a href="https://email.frontforumfocus.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Subscribe to Newsletter
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border border-gray-500 text-white hover:bg-white/10 rounded-full font-bold px-6 md:px-8 py-3 md:py-6 text-base md:text-lg"
            >
              <a href="https://youtube.com/@frontforumfocus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Podcast
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Featured Episodes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold">The Trust Trilogy with Rosa</h2>

          {/* Episode Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Episode 1 */}
            <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
              <div className="inline-block px-3 py-1 bg-yellow-300/20 text-yellow-300 rounded-full mb-3">
                <p className="text-xs font-semibold">Part 1</p>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Where the Money is Going</h3>
              <p className="text-xs md:text-sm text-gray-400 mb-4">
                Exploring capital deployment and policy shifts in impact investing.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-lg"
              >
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Play
                </a>
              </Button>
            </div>

            {/* Episode 2 */}
            <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
              <div className="inline-block px-3 py-1 bg-yellow-300/20 text-yellow-300 rounded-full mb-3">
                <p className="text-xs font-semibold">Part 2</p>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">What Operators Are Doing</h3>
              <p className="text-xs md:text-sm text-gray-400 mb-4">
                Ground-level insights from builders and operators on the front lines.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-lg"
              >
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Play
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
