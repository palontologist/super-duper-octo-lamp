"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play, ArrowRight, BookOpen } from "lucide-react";

export default function StoriesPage() {
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
            Stories from Our Community
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn from founders, organizations, and leaders who are building with impact. These are real stories from real people solving real problems.
          </p>
        </motion.div>

        {/* Featured Episodes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Latest Podcast Episodes</h2>

          {/* Episode Card 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <div className="aspect-video rounded-lg overflow-hidden bg-black border border-white/10">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/USR50RCZXXM?si=Xfpt7jtn924ovHNR"
                title="Dropout: Building the Future of Learning"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-yellow-300/20 text-yellow-300 rounded-full mb-3">
                <p className="text-xs font-semibold">Education</p>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Dropout: Building the Future of Learning</h3>
              <p className="text-sm md:text-base text-gray-400 mb-2 font-semibold">with Leeland Zhang</p>
              <p className="text-xs md:text-sm text-gray-400 mb-4">
                Leeland shares how Dropout is reimagining education for the next generation. We explore the tension between access, quality, and sustainability—and how to build at the intersection of all three.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-lg"
              >
                <a href="https://youtu.be/USR50RCZXXM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Open on YouTube
                </a>
              </Button>
            </div>
          </div>

          {/* Episode Card 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <div className="aspect-video rounded-lg overflow-hidden bg-black border border-white/10 order-last lg:order-first">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Climate Tech Innovation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-yellow-300/20 text-yellow-300 rounded-full mb-3">
                <p className="text-xs font-semibold">Climate Tech</p>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Climate Tech: From Lab to Scale</h3>
              <p className="text-sm md:text-base text-gray-400 mb-2 font-semibold">with Dr. Sarah Chen</p>
              <p className="text-xs md:text-sm text-gray-400 mb-4">
                Sarah discusses the journey of bringing climate solutions from research to market, and the funding challenges unique to deep tech ventures.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-lg"
              >
                <a href="https://youtube.com/@frontforumfocus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Open on YouTube
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
