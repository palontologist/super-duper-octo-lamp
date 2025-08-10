"use client"

// import React, { useCallback } from 'react';
// import { Button } from "@/components/ui/button"
// import { StickyBanner } from "@/components/ui/sticky-banner";
import { Navigation } from "@/components/ui/navigation";
import { WaitlistForm } from "@/components/ui/waitlist-form";
//import Image from "next/image";
import { MorphingText } from "@/components/magicui/morphing-text";
import { ComicText } from "@/components/magicui/comic-text";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#111] flex flex-col relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/soph.png')"
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 pb-24 sm:pb-32">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-white mb-4 sm:mb-6">
            The OS for <span className="inline-block mx-4"><MorphingText texts={["Founders", "Experts" , "Students", "Teams"]} /></span> <span className="ml-26">Focus.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-center text-white/80 max-w-2xl px-4 mb-8 sm:mb-12">
            Align your daily actions with your core mission.
          </p>
          
          {/* Try it section */}
          <div className="space-y-8 text-center mb-8">
            <ComicText fontSize={5}>TRY IT!</ComicText>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl text-center mb-8 px-4">
            It&apos;s free to get started for early access.
          </p>
          
          {/* Waitlist Form */}
          <div className="w-full max-w-sm sm:max-w-md">
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
      <div className="fixed bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <Navigation />
      </div>
    </div>
  )
}
