"use client"

// import React, { useCallback } from 'react';
// import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/navigation";
import { HyperText } from "@/components/magicui/hyper-text";
//import Image from "next/image";

export default function Page() {
  // Use useCallback for event handlers
 // const handleMeasureClick = useCallback(() => {
 //   window.open("/measure", "_self");
 // }, []);
  
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
              className="text-8xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HyperText>
               The unified platform to measure your total impact
              </HyperText>
            </motion.h1>
            
            {/* Subtext */}
            <motion.p
              className="text-sm md:text-base text-white/70 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             From carbon footprint to community action.
            </motion.p>
            
         
          </div>
          {/* Right side - Earth image */} 
          {/*
          <div className="w-full md:w-1/2 flex flex-col items-center">
           
            <motion.div 
              className="flex justify-center items-center"
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
          </div>
          */}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Navigation />
      </div>
    </div>
  )
}
