"use client"

import { WaitlistForm } from "@/components/ui/waitlist-form";

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
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 pb-24 sm:pb-32 pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-white mb-4 sm:mb-6">
           Your focus is broken.
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-center text-white/80 max-w-2xl px-4 mb-8 sm:mb-12">
            Align your daily actions with your core mission.
          </p>

          {/* Narrative paragraphs (no nested <p>) */}
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4">
            As a founder, you&apos;re constantly pulled in a dozen directions.
          </p>
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4 mt-3">
            The tools we&apos;re forced to use—our calendars, notes, and chats—are just a list of tasks.
          </p>
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4 mt-3">
            They show us what we&apos;re doing, but they have no idea what we&apos;re trying to achieve.
          </p>
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4 mt-3">
            They aren&apos;t aligned with our ambition.
          </p>
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4 mt-3">
            Greta is the first tool of its kind to connect every meeting, every task, and every idea back to your North Star.
          </p>
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4 mt-3">
            It’s the clarity you need to confidently say &quot;no&quot; to distractions and &quot;yes&quot; to building your future.
          </p>

          {/* Try it section */}
          <div className="space-y-8 text-center mb-8">
            <ComicText fontSize={2}>Join the Founder&apos;s Circle!</ComicText>
          </div>
          
          {/* Pricing copy (no nested <p>) */}
          <div className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl text-center mb-8 px-4 space-y-2">
            <p>It’s $15/month, billed annually ($180).</p>
            <p>This charter price is locked in for life for our first 20 members, and includes a 30-minute personal onboarding call with me to set up your North Star.</p>
            <p>The standard price will be $25/month.</p>
          </div>
          
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
    </div>
  )
}
