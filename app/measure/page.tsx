"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { useState } from "react";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);

  const storySteps = [
    {
      title: "The Mission",
      content: "I'm building frontforumfocus to navigate my own distractions. Aligning my daily actions [podcasting, side projects and hosting founder events] to my one core mission and deepest ambitions: connecting with builders to create tech that matters."
    },
    {
      title: "The Challenge",
      content: "Every day, we're pulled in countless directions. Good intentions get lost in the noise of urgent tasks, side projects, and endless opportunities. But what if we could see how every action connects to our core mission?"
    },
    {
      title: "The Vision",
      content: "frontforumfocus isn't just another productivity tool. It's a way to measure what truly matters - the impact of our daily choices on our deepest ambitions. When we can see the connection between today's actions and tomorrow's impact, everything changes."
    },
    {
      title: "Join the Journey",
      content: "I'm looking for other builders who want to turn their scattered efforts into focused impact. If you're ready to align your daily actions with your core mission, let's build something that matters together."
    }
  ];

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

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % storySteps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + storySteps.length) % storySteps.length);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            <span className="text-blue-400">Our Story</span>
            <span className="text-white"> & Approach</span>
          </motion.h1>
          <motion.div 
            className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        {/* Cards Container */}
        <div className="max-w-4xl w-full px-4">
          {/* Single Card - Story */}
          <motion.div 
            className="bg-gray-100 rounded-2xl p-4 sm:p-8 shadow-xl relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Numbered design elements - hidden on very small screens */}
            <div className="hidden sm:block absolute -left-4 -top-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <div className="hidden sm:block absolute -right-4 top-1/4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <div className="hidden sm:block absolute -left-4 bottom-1/4 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <div className="hidden sm:block absolute -right-4 -bottom-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              4
            </div>

            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{storySteps[currentStep].title}</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500"></div>
            </div>
            
            <motion.p 
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8"
            >
              {storySteps[currentStep].content}
            </motion.p>

            {/* Pagination */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                <button 
                  onClick={handlePrev}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition-colors"
                >
                  &lt;
                </button>
                <button 
                  onClick={handleNext}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition-colors"
                >
                  &gt;
                </button>
              </div>
              <div className="flex gap-2">
                {storySteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === currentStep ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Learn More Button */}
            <motion.div className="w-full flex justify-center" variants={itemVariants}>
              <Button
                variant="outline"
                className="bg-transparent border-gray-700 text-gray-600 hover:bg-gray-200 hover:text-gray-800 h-10 sm:h-12 px-4 sm:px-6 w-full focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 rounded-lg text-sm sm:text-base"
                asChild
              >
                <Link
                  href="https://sourcia.ai/agent-george"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                  aria-label="Learn more about our approach (opens in a new tab)"
                  className="w-full flex items-center justify-center"
                >
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <Navigation />
      </div>
    </div>
  );
}
