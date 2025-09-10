"use client"

import { WaitlistForm } from "@/components/ui/waitlist-form";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden font-[family-name:var(--font-poppins)]" style={{ backgroundColor: "#60a5fa" }}>
      {/* Blue Sky Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/soph.png')",
          backgroundColor: "#60a5fa"
        }}
      />
      
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-400 opacity-50"></div>

      {/* Main Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Hero Title - 47px */}
          <motion.h1 
            className="font-bold leading-tight"
            style={{ 
              fontSize: "47px",
              fontFamily: "'Arial Black', sans-serif", 
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              letterSpacing: "0.1em"
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring", bounce: 0.3 }}
          >
            <motion.span 
              className="block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              FRONTFORUM
            </motion.span>
            <motion.span 
              className="block text-blue-200"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ fontSize: "42px" }} // Slightly smaller for visual hierarchy
            >
              FOCUS
            </motion.span>
          </motion.h1>
          
          {/* Primary Text - 29px - Simple tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.p 
              className="font-semibold text-white/90"
              style={{ fontSize: "29px", lineHeight: "1.4" }}
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              The future of founder focus
            </motion.p>
          </motion.div>
          
          {/* Secondary Text - 18px */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="space-y-4"
          >
            <motion.p 
              className="text-white/90 font-medium"
              style={{ fontSize: "18px", lineHeight: "1.6" }}
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Join our community of focused founders
            </motion.p>
            
            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10"
            >
              <WaitlistForm
                buttonText="Join Newsletter"
                placeholder="founder@company.com"
                inputClassName="bg-white/20 backdrop-blur border-white/30 text-white h-12 w-80 text-base placeholder-white/70 focus:border-white/50 transition-colors rounded-full px-6"
                buttonClassName="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-base"
                successMessage="🚀 Welcome to the community!"
                className="flex flex-col sm:flex-row items-center gap-4 justify-center"
              />
            </motion.div>
          </motion.div>
          
          {/* Tertiary Text - 11px */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="space-y-2"
          >
            <motion.p 
              className="text-white/60 font-light tracking-wide"
              style={{ fontSize: "11px", letterSpacing: "0.1em" }}
              animate={{ opacity: [0.6, 0.8, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              BUILDING THE FUTURE OF FOUNDER FOCUS
            </motion.p>
            <motion.p 
              className="text-white/50 font-light"
              style={{ fontSize: "11px" }}
              animate={{ y: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              Trusted by innovative founders worldwide
            </motion.p>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
            {/* Footer - Moved higher to avoid taskbar overlap */}
      <div className="absolute bottom-20 left-0 right-0 z-30">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-center text-white font-bold text-xl"
        >
          Connecting purpose with impact
        </motion.p>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        /* Typography Ramp */
        .typography-hero {
          font-size: 47px;
          line-height: 1.2;
        }
        
        .typography-primary {
          font-size: 29px;
          line-height: 1.4;
        }
        
        .typography-secondary {
          font-size: 18px;
          line-height: 1.6;
        }
        
        .typography-tertiary {
          font-size: 11px;
          line-height: 1.5;
          letter-spacing: 0.1em;
        }
        
        /* Responsive Typography */
        @media (max-width: 768px) {
          .typography-hero { font-size: 32px; }
          .typography-primary { font-size: 24px; }
          .typography-secondary { font-size: 16px; }
          .typography-tertiary { font-size: 10px; }
        }
        
        @media (max-width: 480px) {
          .typography-hero { font-size: 28px; }
          .typography-primary { font-size: 20px; }
          .typography-secondary { font-size: 14px; }
          .typography-tertiary { font-size: 9px; }
        }
      `}</style>
    </div>
  );
}