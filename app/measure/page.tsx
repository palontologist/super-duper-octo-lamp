"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { WaitlistForm } from "@/components/ui/waitlist-form";

export default function Page() {
  // The original "Our Approach" content, formatted as a single paragraph.
  const approachParagraph = "Our approach is to help you track what matters—from carbon removed and waste diverted to communities empowered—through intuitive dashboards. We ensure your metrics are accurate and credible with a transparent verification process, allowing you to convert insights into actionable strategies that improve your sustainability performance and drive real results.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    // Main container to center content in a single-page, no-scroll layout
    <div className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden p-8">
      {/* Optional: Subtle background texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Content wrapper with a left-aligned, single-column layout */}
      <motion.div 
        className="z-10 max-w-xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. Main Headline */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Our Approach
          </span>
        </motion.h1>

        {/* 2. Approach Paragraph */}
        <motion.p 
          className="text-lg text-gray-400 leading-relaxed mb-10"
          variants={itemVariants}
        >
          {approachParagraph}
        </motion.p>
        
        {/* 3. Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 relative" 
          variants={itemVariants}
        >
          {/* Onboarding Form */}
          <div className="w-full sm:w-auto flex-grow">
            <WaitlistForm 
              buttonText="Get Onboarded"
              placeholder="you@company.com"
              inputClassName="bg-gray-800/50 border-gray-700 text-white h-12 flex-grow min-w-0"
              buttonClassName="bg-teal-500 hover:bg-teal-600 text-white h-12 px-6 font-semibold whitespace-nowrap"
              successMessage="We'll contact you soon!"
            />
            </div>

          {/* "Learn More" Button */}
          <Button
            variant="outline"
            className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white h-12 px-6 w-full sm:w-auto"
            asChild
          >
            <Link href="https://sourcia.ai/agent-george" target="_blank" rel="noopener noreferrer">
              Learn More
            </Link>
          </Button>
        </motion.div>
                    </motion.div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <Navigation />
      </div>
    </div>
  );
}
