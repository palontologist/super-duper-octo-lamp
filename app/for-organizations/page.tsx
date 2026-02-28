"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BarChart3, Lock, Users, TrendingUp, ArrowRight } from "lucide-react";

export default function ForOrganizationsPage() {
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
            For Organizations & Investors
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Metrics, dashboards, and insights to measure and report your financial and ESG performance with confidence.
          </p>
          <Button
            asChild
            className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full font-bold px-6 md:px-8 py-3 md:py-6 text-base md:text-lg"
          >
            <a href="https://cal.com/georgekarani/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Book a Demo
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
            </a>
          </Button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <BarChart3 className="w-8 h-8 text-yellow-300 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Unified Impact Dashboard</h3>
            <p className="text-xs md:text-sm text-gray-400">
              Combine financial, operational, and program data in one place for complete visibility.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <TrendingUp className="w-8 h-8 text-yellow-300 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">ESG & Impact Reporting</h3>
            <p className="text-xs md:text-sm text-gray-400">
              Generate clear reports for investors, donors, boards, and regulators automatically.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <Users className="w-8 h-8 text-yellow-300 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Decision Support</h3>
            <p className="text-xs md:text-sm text-gray-400">
              See which programs and regions drive the strongest financial and social returns.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
            <Lock className="w-8 h-8 text-yellow-300 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">Data Privacy First</h3>
            <p className="text-xs md:text-sm text-gray-400">
              Enterprise-grade security with role-based access control and compliance built in.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
