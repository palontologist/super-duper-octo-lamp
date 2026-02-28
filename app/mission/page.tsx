"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, Globe } from "lucide-react";

export default function MissionPage() {
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
            Our Mission
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">
            Make impact measurable for everyone.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            FrontForumFocus exists to help founders and organizations align daily work, capital, and decisions with their deepest missions. We believe impact should be measurable, not just aspirational.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <Heart className="w-8 h-8 text-yellow-300 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Impact First</h3>
            <p className="text-xs md:text-sm text-gray-400">
              We believe impact and sustainability are not opposing forces—they're aligned.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <Lightbulb className="w-8 h-8 text-yellow-300 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Measurable Outcomes</h3>
            <p className="text-xs md:text-sm text-gray-400">
              Impact is only real when it's measured and accountable to those affected.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <Users className="w-8 h-8 text-yellow-300 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Community Driven</h3>
            <p className="text-xs md:text-sm text-gray-400">
              The best ideas come from builders. We listen and iterate with our community.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <Globe className="w-8 h-8 text-yellow-300 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Global Perspective</h3>
            <p className="text-xs md:text-sm text-gray-400">
              Impact has no borders. We support builders anywhere on the planet.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
