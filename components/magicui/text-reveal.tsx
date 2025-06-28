'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  phrases: string[];
  interval?: number;
  className?: string;
}

export function TextReveal({ phrases, interval = 3000, className }: TextRevealProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start the animation sequence
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, interval);

    // Initial show
    const initialTimer = setTimeout(() => setIsVisible(true), 500);

    return () => {
      clearInterval(timer);
      clearTimeout(initialTimer);
    };
  }, [phrases.length, interval]);

  return (
    <div className={cn("min-h-[120px] flex items-center justify-center", className)}>
      <div className="text-center">
        <p 
          className={cn(
            "text-gray-300 text-lg transition-all duration-500 transform",
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          )}
        >
          {phrases[activeIndex]}
        </p>
        <div className="flex justify-center mt-4 space-x-2">
          {phrases.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsVisible(true);
              }}
              className={cn(
                'w-2 h-2 rounded-full transition-all',
                index === activeIndex 
                  ? 'bg-white w-6' 
                  : 'bg-gray-600 hover:bg-gray-400'
              )}
              aria-label={`View message ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
