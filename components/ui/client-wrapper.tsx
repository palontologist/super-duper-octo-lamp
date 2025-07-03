"use client";

import { useState, useEffect } from "react";
import { LoadingCurtain } from "@/components/magicui/loading-curtain";
import { SpinningText } from "@/components/magicui/spinning-text";

// Separate HeaderLogo component that could be potentially shared
const HeaderLogo = () => (
  <div className="fixed top-6 right-6 text-right z-50 p-4 rounded-full bg-[#111]/70 backdrop-blur-md shadow-lg">
    <SpinningText className="text-white opacity-90 font-medium" radius={3.5}>front • forum • focus •</SpinningText>
  </div>
);

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <>
      {isMounted && !isLoadingComplete && (
        <LoadingCurtain onLoadingComplete={handleLoadingComplete} />
      )}
      <HeaderLogo />
      {children}
    </>
  );
} 