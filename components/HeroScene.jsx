"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import CanvasWrapper from "./three/CanvasWrapper";
import { useReducedMotionOrMobile } from "./three/useReducedMotionOrMobile";
import HeroCSS3D from "./HeroCSS3D";

function HeroObject() {
  const meshRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useFrame((state) => {
    // Smoothly interpolate rotation towards mouse position
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;
    
    if (meshRef.current) {
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.1;
      meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial
          color="#00ff99"
          emissive="#00ff99"
          emissiveIntensity={0.2}
          wireframe
          distort={0.3}
          speed={2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const pointsRef = useRef(null);
  
  // Generate random points
  const [positions] = useState(() => {
    const pos = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.025;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff99"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

export default function HeroScene() {
  const shouldReduce = useReducedMotionOrMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] flex items-center justify-center">
        <div className="w-48 h-48 xl:w-72 xl:h-72 rounded-full border-4 border-accent/30" />
      </div>
    );
  }

  if (shouldReduce) {
    return <HeroCSS3D />;
  }

  return (
    <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative">
      <CanvasWrapper camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <HeroObject />
        <ParticleField />
      </CanvasWrapper>
    </div>
  );
}
