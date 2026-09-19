"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

interface DeveloperCoreProps {
  isMobile?: boolean;
}

export default function DeveloperCore({ isMobile = false }: DeveloperCoreProps) {
  const outerWireframeRef = useRef<THREE.Mesh>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const mouseX = state.pointer.x * 0.4;
    const mouseY = state.pointer.y * 0.4;

    // Smooth tilt to mouse
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouseY, 0.05);
    }

    // Outer wireframe rotation
    if (outerWireframeRef.current) {
      outerWireframeRef.current.rotation.y += delta * 0.25;
      outerWireframeRef.current.rotation.z += delta * 0.15;
    }

    // Inner pulsing sphere
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y -= delta * 0.35;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.5) * 0.06;
      innerSphereRef.current.scale.set(pulse, pulse, pulse);
    }

    // Rotating orbital rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.3;
      ring1Ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.22;
      ring2Ref.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Core Center Monogram Badge */}
        <Html center distanceFactor={10} position={[0, 0, 0]}>
          <div className="pointer-events-none select-none flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-violet-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.6)]">
              <span className="font-mono font-black text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
                ND
              </span>
            </div>
            <div className="mt-1 px-2 py-0.5 rounded-full bg-violet-950/70 border border-violet-500/30 text-[9px] font-mono tracking-wider text-cyan-300 uppercase">
              DEV CORE
            </div>
          </div>
        </Html>

        {/* Inner Glowing Sphere */}
        <mesh ref={innerSphereRef}>
          <sphereGeometry args={[1.05, 32, 32]} />
          <meshStandardMaterial
            color="#5B21B6"
            emissive="#7C3AED"
            emissiveIntensity={0.65}
            roughness={0.2}
            metalness={0.8}
            wireframe={false}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Outer Wireframe Icosahedron */}
        <mesh ref={outerWireframeRef}>
          <icosahedronGeometry args={[1.65, 1]} />
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#0891B2"
            emissiveIntensity={0.5}
            wireframe
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Orbital Ring 1 (Cyan) */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.1, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#22D3EE"
            emissiveIntensity={0.7}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Orbital Ring 2 (Purple) */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[2.35, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#A78BFA"
            emissive="#7C3AED"
            emissiveIntensity={0.7}
            transparent
            opacity={0.55}
          />
        </mesh>
      </group>
    </Float>
  );
}
