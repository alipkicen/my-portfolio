"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import CanvasWrapper from "./three/CanvasWrapper";
import { useReducedMotionOrMobile } from "./three/useReducedMotionOrMobile";

function ScrollParticles() {
  const pointsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate random points
  const [positions] = useState(() => {
    const pos = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      // Slow drift
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      
      // Scroll reaction
      pointsRef.current.position.y = scrollY * 0.005;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff99"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.15}
      />
    </Points>
  );
}

export default function ScrollScene() {
  const shouldReduce = useReducedMotionOrMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || shouldReduce) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <CanvasWrapper camera={{ position: [0, 0, 5], fov: 60 }}>
        <ScrollParticles />
      </CanvasWrapper>
    </div>
  );
}
