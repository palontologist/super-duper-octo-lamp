"use client"

// import React, { useCallback } from 'react';
// import { Button } from "@/components/ui/button"
// import { StickyBanner } from "@/components/ui/sticky-banner";
import { Navigation } from "@/components/ui/navigation";
import { WaitlistForm } from "@/components/ui/waitlist-form";
//import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#111] flex flex-col md:flex-row">
      {/* Left column */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-white mb-4 sm:mb-6">
          It&apos;s time to <span className="block">measure your impact.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-center text-white/80 max-w-2xl px-4">
          The unified platform to measure your total impact.<br />From carbon footprint to community action.
        </p>
      </div>
      {/* Divider */}
      <div className="hidden md:block w-px bg-gray-800"></div>
      {/* Right column */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="flex flex-col items-center w-full max-w-sm sm:max-w-md">
          <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 via-purple-500 via-teal-400 to-pink-500 bg-clip-text text-transparent">
            Try it.
          </span>
          <p className="text-sm sm:text-base md:text-lg text-white/80 mt-2 sm:mt-4 max-w-xl text-center mb-6 sm:mb-8 px-4">
            It&apos;s free to <a href="https://greta-v1.vercel.app" target="_blank" rel="noopener noreferrer" className="underline text-blue-300 hover:text-blue-400 hover:scale-105 transition-transform duration-200">get started</a> for early access.
          </p>
          
          {/* Waitlist Form */}
          <div className="w-full">
            <WaitlistForm
              buttonText="Get Onboarded"
              placeholder="you@company.com"
              inputClassName="bg-gray-800/50 border-gray-700 text-white h-10 sm:h-12 flex-grow min-w-0 text-sm sm:text-base"
              buttonClassName="bg-teal-500 hover:bg-teal-600 text-white h-10 sm:h-12 px-4 sm:px-6 font-semibold whitespace-nowrap text-sm sm:text-base"
              successMessage="We'll contact you soon!"
            />
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Navigation />
      </div>
    </div>
  )
}
