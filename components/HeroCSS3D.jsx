"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const HeroCSS3D = () => {
  const containerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setRotate({ x: y * -20, y: x * 20 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  // Fallback for SSR / no JS
  if (!mounted) {
    return (
      <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] flex items-center justify-center">
        <div className="w-48 h-48 xl:w-72 xl:h-72 rounded-full border-4 border-accent/30" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] flex items-center justify-center"
      style={{ perspective: "800px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-48 h-48 xl:w-72 xl:h-72 transition-transform duration-200 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* ── Layer 1: Core octagon ────────────────────── */}
        <div
          className="absolute inset-0"
          style={{ transform: "translateZ(0px)" }}
        >
          <div
            className="w-full h-full rounded-3xl border-2 border-accent/30"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,255,153,0.06) 0%, transparent 50%, rgba(0,255,153,0.03) 100%)",
              boxShadow: "0 0 60px rgba(0,255,153,0.08), inset 0 0 60px rgba(0,255,153,0.04)",
            }}
          />
        </div>

        {/* ── Layer 2: Photo (center of the 3D stack) ── */}
        <div
          className="absolute overflow-hidden"
          style={{
            inset: "22px",
            transform: "translateZ(22px)",
            borderRadius: "50%",
            border: "2px solid rgba(0,255,153,0.3)",
            boxShadow: "0 0 25px rgba(0,255,153,0.15)",
          }}
        >
          <Image
            src="/photos.png"
            fill
            className="object-cover"
            alt="Krishan Arpidani"
            priority
          />
        </div>

        {/* ── Layer 3: Middle plane ───────────────────── */}
        <div
          className="absolute"
          style={{
            inset: "12px",
            transform: "translateZ(15px)",
            borderRadius: "20px",
            border: "1.5px solid rgba(0,255,153,0.4)",
            background:
              "linear-gradient(160deg, rgba(0,255,153,0.1) 0%, transparent 60%)",
            boxShadow: "0 0 40px rgba(0,255,153,0.06)",
          }}
        />

        {/* ── Layer 3: Inner ring ──────────────────────── */}
        <div
          className="absolute"
          style={{
            inset: "30px",
            transform: "translateZ(30px)",
            borderRadius: "50%",
            border: "2px solid rgba(0,255,153,0.5)",
            background: "transparent",
            boxShadow:
              "0 0 30px rgba(0,255,153,0.12), inset 0 0 30px rgba(0,255,153,0.06)",
          }}
        />

        {/* ── Layer 4: Back plate ──────────────────────── */}
        <div
          className="absolute"
          style={{
            inset: "8px",
            transform: "translateZ(-15px)",
            borderRadius: "20px",
            border: "1px solid rgba(0,255,153,0.15)",
            background:
              "linear-gradient(200deg, transparent 0%, rgba(0,255,153,0.04) 100%)",
          }}
        />

        {/* ── Layer 5: Cross lines (the wireframe feel) ── */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: "translateZ(45px)" }}
        >
          {/* Horizontal line */}
          <div
            className="absolute left-2 right-2 h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,255,153,0.5) 20%, rgba(0,255,153,0.5) 80%, transparent)",
            }}
          />
          {/* Vertical line */}
          <div
            className="absolute top-2 bottom-2 w-[1px]"
            style={{
              background:
                "linear-gradient(0deg, transparent, rgba(0,255,153,0.5) 20%, rgba(0,255,153,0.5) 80%, transparent)",
            }}
          />
          {/* Diagonal lines */}
          <div
            className="absolute"
            style={{
              width: "70%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(0,255,153,0.2) 20%, rgba(0,255,153,0.2) 80%, transparent)",
              transform: "rotate(45deg)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "70%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(0,255,153,0.2) 20%, rgba(0,255,153,0.2) 80%, transparent)",
              transform: "rotate(-45deg)",
            }}
          />
        </div>
      </div>

      {/* ── Outer glow ring (static, for atmosphere) ──── */}
      <div
        className="absolute rounded-full animate-pulse"
        style={{
          width: "110%",
          height: "110%",
          border: "1px solid rgba(0,255,153,0.06)",
          boxShadow: "0 0 80px rgba(0,255,153,0.04)",
          animationDuration: "4s",
        }}
      />

      {/* ── Corner accent dots ────────────────────────── */}
      {[
        { top: -4, left: -4 },
        { top: -4, right: -4 },
        { bottom: -4, left: -4 },
        { bottom: -4, right: -4 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 xl:w-3 xl:h-3 rounded-full bg-accent/60"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
            boxShadow: "0 0 10px rgba(0,255,153,0.4)",
          }}
        />
      ))}
    </div>
  );
};

export default HeroCSS3D;
