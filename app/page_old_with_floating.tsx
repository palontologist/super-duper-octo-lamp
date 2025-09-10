"use client"

import { WaitlistForm } from "@/components/ui/waitlist-form";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Draggable floating element component
interface DraggableElementProps {
  id: string;
  initialPosition: { x: number; y: number };
  children: React.ReactNode;
  className?: string;
}

const DraggableElement = ({ initialPosition, children, className = "" }: Omit<DraggableElementProps, 'id'>) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offsetRef.current.x,
          y: e.clientY - offsetRef.current.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      offsetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setIsDragging(true);
    }
  };

  return (
    <div
      ref={elementRef}
      className={`absolute cursor-move transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg select-none ${className}`}
      style={{
        left: position.x,
        top: position.y,
        zIndex: isDragging ? 1000 : 10,
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

// Floating icon component
const FloatingIcon = ({ emoji, imageSrc, size = "text-4xl", imageSize = "w-16 h-16", className = "" }: { 
  emoji?: string; 
  imageSrc?: string;
  size?: string; 
  imageSize?: string;
  className?: string;
}) => {
  if (imageSrc) {
    return (
      <div className={`${imageSize} ${className} filter drop-shadow-md hover:drop-shadow-xl transition-all duration-300 flex items-center justify-center relative`}>
        <Image 
          src={imageSrc} 
          alt="3D Icon" 
          fill
          className="object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>
    );
  }
  
  return (
    <div className={`${size} ${className} filter drop-shadow-md hover:drop-shadow-xl transition-all duration-300`}>
      {emoji}
    </div>
  );
};

// Navigation component - using the imported one from components/ui/navigation.tsx

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
          
          {/* Primary Text - 29px - Von Restorff Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl"
          >
            <motion.p 
              className="font-semibold text-yellow-200"
              style={{ fontSize: "29px", lineHeight: "1.4" }}
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(255, 255, 255, 0.5)",
                  "0 0 10px rgba(255, 255, 255, 0.3)",
                  "0 0 5px rgba(255, 255, 255, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              Connecting purpose with impact
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

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="pointer-events-auto">
          {/* Computer/Tech - Top Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.4 }}
          >
            <DraggableElement
              initialPosition={{ x: 80, y: 180 }}
              className="group animate-pulse"
            >
              <FloatingIcon imageSrc="/3dicons-computer-dynamic-color.png" imageSize="w-20 h-20" className="animate-bounce" />
              <p className="absolute top-full left-0 w-max mt-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/70 px-3 py-2 rounded-lg backdrop-blur">
                Digital innovation hub!
              </p>
            </DraggableElement>
          </motion.div>

          {/* Headphones - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.7, type: "spring" }}
          >
            <DraggableElement
              initialPosition={{ x: 160, y: 320 }}
              className="animate-spin-slow hover:animate-none"
            >
              <FloatingIcon imageSrc="/3dicons-headphone-dynamic-color.png" imageSize="w-18 h-18" className="hover:scale-125 transition-transform" />
            </DraggableElement>
          </motion.div>

          {/* Lab/Innovation - Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: 90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.9, type: "spring" }}
          >
            <DraggableElement
              initialPosition={{ x: 780, y: 180 }}
              className="animate-pulse"
            >
              <FloatingIcon imageSrc="/3dicons-lab-dynamic-color.png" imageSize="w-20 h-20" className="animate-pulse" />
            </DraggableElement>
          </motion.div>

          {/* Sustainability Leaf - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: -45 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 1.1, type: "spring", bounce: 0.3 }}
          >
            <DraggableElement
              initialPosition={{ x: 120, y: 480 }}
              className="group"
            >
              <FloatingIcon imageSrc="/3dicons-leaf-dynamic-color.png" imageSize="w-18 h-18" className="hover:animate-ping" />
              <p className="absolute top-full left-0 w-max mt-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-green-600/80 to-teal-600/80 px-3 py-2 rounded-lg backdrop-blur">
                Sustainable impact!
              </p>
            </DraggableElement>
          </motion.div>

          {/* Newsletter/Email - Bottom Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.3, type: "spring", bounce: 0.5 }}
          >
            <DraggableElement
              initialPosition={{ x: 40, y: 550 }}
              className="group"
            >
              <FloatingIcon emoji="✉️" size="text-6xl" className="hover:rotate-12 transition-transform" />
              <p className="absolute bottom-full left-0 w-max mb-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-blue-600/80 to-purple-600/80 px-3 py-2 rounded-lg backdrop-blur">
                Join our newsletter!
              </p>
            </DraggableElement>
          </motion.div>

          {/* Podcast Icon - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
          >
            <DraggableElement
              initialPosition={{ x: 720, y: 420 }}
            >
              <FloatingIcon emoji="🎵" size="text-5xl" className="animate-bounce" />
            </DraggableElement>
          </motion.div>

          {/* Light Bulb - Right Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 1.7, type: "spring", bounce: 0.4 }}
          >
            <DraggableElement
              initialPosition={{ x: 680, y: 280 }}
              className="group"
            >
              <FloatingIcon emoji="💡" size="text-7xl" className="animate-pulse hover:animate-none hover:brightness-125" />
              <p className="absolute bottom-full right-0 w-max mb-2 text-white font-semibold text-sm transform -rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-yellow-600/80 to-orange-600/80 px-3 py-2 rounded-lg backdrop-blur">
                Spark your next big idea!
              </p>
            </DraggableElement>
          </motion.div>

          {/* Extra Headphones - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 100, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1, delay: 1.9, type: "spring" }}
          >
            <DraggableElement
              initialPosition={{ x: 620, y: 520 }}
              className="animate-spin-slow hover:animate-none"
            >
              <FloatingIcon emoji="🎧" size="text-5xl" className="hover:scale-110 transition-transform" />
            </DraggableElement>
          </motion.div>

          {/* Focus Icon - Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 2, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.3, delay: 2.1, type: "spring", bounce: 0.3 }}
          >
            <DraggableElement
              initialPosition={{ x: 850, y: 140 }}
              className="animate-pulse"
            >
              <FloatingIcon emoji="🎯" size="text-6xl" className="hover:rotate-180 transition-transform duration-500" />
            </DraggableElement>
          </motion.div>

          {/* Brain Icon - Center Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.2, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.3, type: "spring", bounce: 0.6 }}
          >
            <DraggableElement
              initialPosition={{ x: 180, y: 380 }}
              className="animate-pulse"
            >
              <FloatingIcon emoji="🧠" size="text-5xl" className="hover:animate-ping" />
            </DraggableElement>
          </motion.div>

          {/* Rocket Icon - Center */}
          <motion.div
            initial={{ opacity: 0, y: 200, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 2.5, type: "spring", bounce: 0.4 }}
          >
            <DraggableElement
              initialPosition={{ x: 450, y: 200 }}
              className="group"
            >
              <FloatingIcon emoji="🚀" size="text-6xl" className="animate-bounce hover:animate-none hover:scale-125 transition-transform" />
              <p className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-max mb-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-purple-600/80 to-pink-600/80 px-3 py-2 rounded-lg backdrop-blur">
                Launch your focus!
              </p>
            </DraggableElement>
          </motion.div>
        </div>
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
        
        /* Von Restorff Isolation Effect */
        .von-restorff-highlight {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        /* Subtle Motion Animations */
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite alternate;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          from { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
          to { text-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.3); }
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