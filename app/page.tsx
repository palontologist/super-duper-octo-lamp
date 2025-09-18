"use client";

import { WaitlistForm } from "@/components/ui/waitlist-form";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-black text-white">

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Image - Using MOSHED image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 overflow-hidden"
        >
          <Image
            src="/MOSHED-2025-9-18-12-53-42.jpg"
            alt="Moshed artistic background"
            fill
            className="object-cover opacity-80"
            priority
          />
          
          {/* Glitch effect overlay elements */}
          <motion.div
            animate={{ 
              x: [0, 10, -5, 0],
              opacity: [0.3, 0.7, 0.3] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-20 left-20 w-[30px] h-[30px] bg-cyan-400 opacity-30"
          />
          <motion.div
            animate={{ 
              x: [0, -8, 12, 0],
              opacity: [0.2, 0.6, 0.2] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 
            }}
            className="absolute top-40 right-32 w-[30px] h-[30px] bg-pink-400 opacity-30"
          />
          <motion.div
            animate={{ 
              x: [0, 15, -10, 0],
              opacity: [0.4, 0.8, 0.4] 
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2 
            }}
            className="absolute bottom-32 left-40 w-[30px] h-[30px] bg-purple-400 opacity-30"
          />
        </motion.div>

        {/* Hero Text */}
        <div className="relative z-10 px-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-4"
          >
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="block"
            >
              Community + tools
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="block"
            >
              to connect purpose
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="block"
            >
              with outcomes
            </motion.span>
          </motion.h1>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-12 bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/20 max-w-md"
          >
            <WaitlistForm
              buttonText="Join Newsletter"
              placeholder="founder@company.com"
              inputClassName="bg-transparent border-none text-white h-12 w-full text-base placeholder-white/70 focus:outline-none px-6"
              buttonClassName="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-base whitespace-nowrap"
              successMessage="🚀 Welcome to the community!"
              className="flex items-center gap-2"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}