"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface Spline3DProps {
  scene: string;
  className?: string;
}

export function Spline3D({ scene, className = "" }: Spline3DProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Initialize Spline viewer after script is loaded
    if (loaded) {
      const container = document.getElementById("spline-container");
      if (container) {
        container.innerHTML = `<spline-viewer url="${scene}" loading-anim></spline-viewer>`;
      }
    }

    // Clean up function to remove any Spline canvas on unmount
    return () => {
      const container = document.getElementById("spline-container");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [loaded, scene]);

  return (
    <>
      <Script
        src="https://unpkg.com/@splinetool/viewer@0.9.490/build/spline-viewer.js"
        onLoad={() => setLoaded(true)}
      />
      <div id="spline-container" className={className}></div>
    </>
  );
} 