"use client"

import React, { useState, useEffect, useCallback, memo } from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextReveal } from "@/components/magicui/text-reveal";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { StarsAnimation } from "@/components/magicui/stars-animation";
import { Navigation } from "@/components/ui/navigation";
import { HyperText } from "@/components/magicui/hyper-text";
// Memoized Stars Animation component
const MemoizedStarsAnimation = memo(StarsAnimation);

// Memoized TypingPrompt component
const TypingPrompt = memo(({ prompt }: { prompt: string }) => (
  <TypingAnimation 
    className="inline-block prompt-text"
    duration={50}
  >
    {prompt}
  </TypingAnimation>
));

export default function Page() {
  const [isHovering, setIsHovering] = useState(false);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  
  const prompts = [
    "Good intentions are not enough.",
    "You bike to work — how much CO₂ did you avoid?",
    "I'm doing my part — really? Let's see.",
    "I recycle - but do you know the impact",
    "Every action counts. Ready to prove it?"
  ];
  
  // Use useEffect with empty dependency array as it doesn't depend on props/state
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
    }, 5000); // Change prompt every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
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
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        {/* Top decoration - small stars */}
        <motion.div 
          className="absolute top-24 w-full max-w-md h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
        >
          <MemoizedStarsAnimation />
        </motion.div>
        
        {/* Main content */}
        <div className="z-10 max-w-3xl w-full text-center mt-20">
          {/* Main headline */}
    
            <motion.h1 
              className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            <HyperText>
                It's time to measure what matters.
              </HyperText>
            </motion.h1>
          
          
          {/* Rotating prompts with typewriter effect - FIXED HEIGHT */}
          <div className="h-16 mb-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPromptIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-sm md:text-base font-normal text-[#F7CACA]/70 prompt-text"
              >
                <TypingPrompt prompt={prompts[currentPromptIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Primary CTA Button - SMALLER TEXT */}
          <motion.div
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
              className="bg-[#F7CACA] hover:bg-[#F7CACA]/90 text-[#111] px-6 py-4 text-base font-medium rounded-full"
              onClick={handleMeasureClick}
            >
              Measure My Impact
            </Button>
          </motion.div>
          
          {/* Secondary link 
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8"
          >
            <Link 
              href="/start" 
              className="text-white/70 hover:text-[#F7CACA] transition-colors text-sm underline underline-offset-4"
            >
              Join the waitlist
            </Link>
          </motion.div>
          */}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Navigation />
      </div>
    </div>
  )
}
