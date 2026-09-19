"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { coreOrbits } from "@/data/skills";

export default function TechOrbit() {
  const orbitsGroupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!orbitsGroupRef.current) return;
    // Slow planetary orbital rotation
    orbitsGroupRef.current.rotation.y += delta * 0.12;
    // Slight counter-tilt
    orbitsGroupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  });

  return (
    <group ref={orbitsGroupRef}>
      {coreOrbits.map((tech, index) => {
        const angle = (index / coreOrbits.length) * Math.PI * 2;
        const x = Math.cos(angle) * tech.radius;
        const z = Math.sin(angle) * tech.radius;
        const y = Math.sin(angle * 2) * 0.45;

        return (
          <group key={tech.name} position={[x, y, z]}>
            {/* Tech Node Marker */}
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial
                color={tech.color}
                emissive={tech.color}
                emissiveIntensity={0.8}
              />
            </mesh>

            {/* Floating HTML Badge */}
            <Html center distanceFactor={9} zIndexRange={[100, 0]}>
              <div className="select-none pointer-events-auto transform hover:scale-110 transition-transform duration-200">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#080A0D]/90 backdrop-blur-md border border-white/15 text-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.5)] whitespace-nowrap">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
                  />
                  <span className="text-[11px] font-mono font-medium tracking-tight">
                    {tech.name}
                  </span>
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}
