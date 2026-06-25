"use client";

import { useState, useEffect } from "react";

export function useReducedMotionOrMobile() {
  const [shouldReduce, setShouldReduce] = useState(false);

  useEffect(() => {
    const checkConditions = () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobile = window.innerWidth < 768;
      const isLowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      
      setShouldReduce(prefersReducedMotion || isMobile || isLowPower);
    };

    // Initial check
    checkConditions();

    // Listen for resize and motion preference changes
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    const handleResize = () => checkConditions();
    const handleMotionChange = () => checkConditions();

    window.addEventListener("resize", handleResize);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return shouldReduce;
}
