"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap, Users, Target, ArrowRight } from "lucide-react";

export default function ForFoundersPage() {
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
            For Founders & Indie Builders
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Tools and stories to help you price your time, grow revenue, and stay aligned with your impact thesis.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Button
              asChild
              className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full font-bold px-6 md:px-8 py-3 md:py-6 text-base md:text-lg"
            >
              <a href="https://greta-v2.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Try Greta Free
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border border-gray-500 text-white hover:bg-white/10 rounded-full font-bold px-6 md:px-8 py-3 md:py-6 text-base md:text-lg"
            >
              <Link href="/stories">Founder Stories</Link>
            </Button>
          </div>
        </motion.div>

        {/* Three Challenge Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <Target className="w-8 h-8 text-yellow-300 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Mission vs. Revenue</h3>
            <p className="text-xs md:text-sm text-gray-400">
              Know which clients and projects align with your mission while paying the bills.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <Zap className="w-8 h-8 text-yellow-300 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Growth & Scale</h3>
            <p className="text-xs md:text-sm text-gray-400">
              Track which projects drive the most impact and revenue for your business.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <Users className="w-8 h-8 text-yellow-300 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Community</h3>
            <p className="text-xs md:text-sm text-gray-400">
              Connect with other founders building for impact and accountability.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
