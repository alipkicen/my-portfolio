"use client";

import { Canvas } from "@react-three/fiber";

export default function CanvasWrapper({ children, ...props }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      {...props}
    >
      {children}
    </Canvas>
  );
}
