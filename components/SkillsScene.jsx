"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, OrbitControls, Billboard } from "@react-three/drei";
import * as THREE from "three";
import CanvasWrapper from "./three/CanvasWrapper";
import { useReducedMotionOrMobile } from "./three/useReducedMotionOrMobile";

const SKILLS = [
  "HTML", "CSS", "JS", "React", "Next.js", "Tailwind", "Node.js", "Python", "SQL", "Git"
];

function SkillNode({ text, position }) {
  const meshRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      // Scale up slightly on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <group
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color={hovered ? "#00ff99" : "#1c1c22"}
            emissive={hovered ? "#00ff99" : "#00ff99"}
            emissiveIntensity={hovered ? 0.5 : 0.2}
            wireframe={!hovered}
          />
        </mesh>
        <Billboard position={[0, -1, 0]}>
          <Text
            fontSize={0.3}
            color="#00ff99"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#1c1c22"
          >
            {text}
          </Text>
        </Billboard>
      </group>
    </Float>
  );
}

function SkillCluster() {
  const groupRef = useRef(null);

  // Distribute nodes on a sphere
  const nodes = useMemo(() => {
    const items = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    
    for (let i = 0; i < SKILLS.length; i++) {
      const y = 1 - (i / (SKILLS.length - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment
      
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      
      // Scale up the sphere radius
      const scale = 3.5;
      items.push({
        text: SKILLS[i],
        position: [x * scale, y * scale, z * scale]
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow auto-rotation
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <SkillNode key={i} text={node.text} position={node.position} />
      ))}
    </group>
  );
}

export default function SkillsScene() {
  const shouldReduce = useReducedMotionOrMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || shouldReduce) {
    return null; // Fallback is just the existing grid below it
  }

  return (
    <div className="w-full h-[300px] md:h-[400px] mb-8 relative cursor-grab active:cursor-grabbing">
      <CanvasWrapper camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <SkillCluster />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate={false}
        />
      </CanvasWrapper>
    </div>
  );
}
