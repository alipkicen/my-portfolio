"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotionOrMobile } from "./three/useReducedMotionOrMobile";

export default function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduce = useReducedMotionOrMobile();

  const handleMouseMove = (e) => {
    if (shouldReduce || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    // Max rotation 15 degrees
    setRotateX(yPct * -15);
    setRotateY(xPct * 15);
  };

  const handleMouseEnter = () => {
    if (shouldReduce) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (shouldReduce) return;
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 1,
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-accent/20 blur-xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content wrapper with parallax */}
      <motion.div
        className="w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          z: isHovered ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
