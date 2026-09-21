"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BackgroundParticlesProps {
  count?: number;
}

export default function BackgroundParticles({ count = 140 }: BackgroundParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);

    const cWhite = new THREE.Color("#F8FAFC");
    const cSlate = new THREE.Color("#94A3B8");
    const cIce = new THREE.Color("#BAE6FD");
    const cViolet = new THREE.Color("#A78BFA");
    const cCyan = new THREE.Color("#22D3EE");

    for (let i = 0; i < count; i++) {
      // 3 Depth tiers: 50% far (smaller, deeper), 35% mid, 15% near
      const depthTier = Math.random();
      let size = 0.02;
      let spreadX = 26;
      let spreadY = 18;
      let spreadZ = 16;

      if (depthTier < 0.5) {
        // Far
        size = 0.018 + Math.random() * 0.012;
      } else if (depthTier < 0.85) {
        // Mid
        size = 0.032 + Math.random() * 0.016;
      } else {
        // Near
        size = 0.048 + Math.random() * 0.024;
      }

      pos[i * 3] = (Math.random() - 0.5) * spreadX;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;

      // Restrained celestial color palette
      const colorChoice = Math.random();
      let selectedColor = cSlate;
      if (colorChoice < 0.45) {
        selectedColor = cWhite;
      } else if (colorChoice < 0.7) {
        selectedColor = cSlate;
      } else if (colorChoice < 0.82) {
        selectedColor = cIce;
      } else if (colorChoice < 0.92) {
        selectedColor = cViolet; // subtle accent
      } else {
        selectedColor = cCyan; // subtle accent
      }

      col[i * 3] = selectedColor.r;
      col[i * 3 + 1] = selectedColor.g;
      col[i * 3 + 2] = selectedColor.b;
      sz[i] = size;
    }

    return { positions: pos, colors: col, sizes: sz };
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    // Ultra-calm cosmic drift
    pointsRef.current.rotation.y += delta * 0.015;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
