"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-[#111] text-white overflow-hidden relative flex flex-col items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-white/10"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-20 max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12 text-center"
        >
          <div className="text-2xl md:text-3xl font-bold">
            <span className="text-white">f</span>
            <span className="text-yellow-300">^</span>
            <span className="text-white">3</span>
          </div>
        </motion.div>

        {/* Hero Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 md:mb-6">
              <span className="text-yellow-300">Tech making</span> impact{" "}
              <span className="text-white">measurable</span> for everyone.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl">
              Clear priorities, accountability, and shipped outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                asChild
                className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full font-bold px-6 md:px-8 py-3 md:py-6 text-base md:text-lg"
              >
                <a
                  href="https://greta-v2.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Try Greta
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </a>
              </Button>
              <Button
                asChild
                className="border border-yellow-300 text-yellow-300 hover:bg-yellow-300/10 rounded-full font-bold px-6 md:px-8 py-3 md:py-6 text-base md:text-lg"
              >
                <a href="/impact-intelligence" className="flex items-center gap-2">
                  Impact Intelligence
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Centered Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center"
          >
            {/* Central Animated Sphere */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, linear: true }}
              className="w-48 md:w-56 lg:w-64 h-48 md:h-56 lg:h-64 bg-gradient-to-br from-white/10 to-gray-700/20 rounded-full shadow-2xl border border-white/5"
            />
          </motion.div>
        </div>


      </div>
    </div>
  );
}
