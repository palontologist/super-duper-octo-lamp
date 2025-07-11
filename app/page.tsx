"use client"

import React, { useState, useEffect, useCallback, memo } from 'react';
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/ui/navigation";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";

// Memoized TypingPrompt component
const TypingPrompt = memo(({ prompt }: { prompt: string }) => {
  return (
    <TypingAnimation 
      className="inline-block prompt-text"
      duration={50}
    >
      {prompt}
    </TypingAnimation>
  );
});

TypingPrompt.displayName = 'TypingPrompt';

export default function Page() {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  
  const prompts = [
    "Good intentions are not enough.",
    "You bike to work — how much CO₂ did you avoid?",
    "I'm doing my part — really? Let's see.",
    "I recycle - but do you know the impact",
    "Every action counts. Ready to prove it?"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [prompts.length]);
  
  // Use useCallback for event handlers
  const handleMeasureClick = useCallback(() => {
    window.open("/measure", "_self");
  }, []);
  
  return (
    <div className="min-h-screen bg-[#111] relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
  
      {/* Full screen layout */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 py-10 md:py-20">
        {/* Main content */}
        <div className="z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-4">
          {/* Left side - title and subtitle */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
            {/* Main headline */}
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HyperText>
                Bringing clarity to good intentions
              </HyperText>
            </motion.h1>
            
            {/* Subtext */}
            <motion.p
              className="text-sm md:text-base text-white/70 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              By providing tools to identify, measure and monitor impact
            </motion.p>
            
            {/* Primary CTA Button */}
            <motion.div
              className="mx-auto md:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(247, 202, 202, 0)", "0 0 20px 5px rgba(247, 202, 202, 0.3)", "0 0 0 0 rgba(247, 202, 202, 0)"]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
            >
              <Button 
                className="bg-[#F7CACA] hover:bg-[#F7CACA]/90 text-[#111] px-6 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-full"
                onClick={handleMeasureClick}
              >
                Measure My Impact
              </Button>
            </motion.div>
          </div>
          
          {/* Right side - Earth image and prompts */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            {/* Earth image */}
            <motion.div 
              className="flex justify-center items-center mb-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <Image
                  src="/earth.png"
                  alt="Earth"
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, 320px"
                  priority
                  className="object-contain"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(67, 190, 255, 0.3))"
                  }}
                />
              </div>
            </motion.div>

            {/* Rotating prompts below the earth image */}
            <div className="h-8 flex items-center justify-center w-full text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPromptIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-[10px] sm:text-xs font-normal text-[#F7CACA]/60 prompt-text tracking-wide"
                >
                  <TypingPrompt 
                    prompt={prompts[currentPromptIndex]} 
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Navigation />
      </div>
    </div>
  )
}
