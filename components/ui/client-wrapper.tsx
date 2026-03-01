"use client";

import { useState, useEffect } from "react";
import AdsConsent from "./ads-consent";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    setIsLoadingComplete(true);
  }, []);
  
  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <>
      <AdsConsent />
      {children}
    </>
  );
}
