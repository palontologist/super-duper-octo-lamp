"use client";

import { useEffect, useState, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingCurtainProps {
  onLoadingComplete?: () => void;
  minLoadingTime?: number;
}

export const LoadingCurtain = memo(({
  onLoadingComplete,
  minLoadingTime = 2000, // Minimum time to show loading screen (ms)
}: LoadingCurtainProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, [minLoadingTime, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.6,
              ease: "easeInOut"
            }
          }}
        >
          <div className="relative w-full h-full">
            {/* Logo Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 1,
                    ease: "easeOut"
                  }
                }}
                className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
              >
                <Image
                  src="/frontforumfocus.png"
                  alt="Front Forum Focus"
                  fill
                  sizes="(max-width: 768px) 280px, 400px"
                  priority
                  className="object-contain"
                />
              </motion.div>
            </div>
            
            {/* Curtain effect */}
            <motion.div 
              className="absolute inset-0 bg-black"
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ 
                scaleY: 1,
                transition: { 
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 1.8
                }
              }}
            />
            
            {/* Bottom curtain */}
            <motion.div 
              className="absolute inset-0 bg-black"
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ 
                scaleY: 1,
                transition: { 
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 1.8
                }
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

LoadingCurtain.displayName = "LoadingCurtain"; 