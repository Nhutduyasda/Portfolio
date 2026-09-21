"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

interface DeveloperCoreProps {
  isMobile?: boolean;
}

export default function DeveloperCore({ isMobile = false }: DeveloperCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const innerEnergyRef = useRef<THREE.Mesh>(null);
  const glassShellRef = useRef<THREE.Mesh>(null);
  const digitalGeometryRef = useRef<THREE.Mesh>(null);
  const halo1Ref = useRef<THREE.Mesh>(null);
  const halo2Ref = useRef<THREE.Mesh>(null);
  const dataPointsGroupRef = useRef<THREE.Group>(null);

  // 10 Subtle Data Particles on wireframe/outer layer
  const dataNodes = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / 10);
      const theta = Math.sqrt(10 * Math.PI) * phi;
      const radius = 1.78;
      return {
        initialX: radius * Math.cos(theta) * Math.sin(phi),
        initialY: radius * Math.sin(theta) * Math.sin(phi),
        initialZ: radius * Math.cos(phi),
        speed: 0.4 + (i % 3) * 0.2,
        phase: i * 0.7,
      };
    });
  }, []);

  useFrame((state, delta) => {
    // 1. Smooth Mouse Parallax Rotation
    if (groupRef.current) {
      const targetRotY = state.pointer.x * 0.16;
      const targetRotX = -state.pointer.y * 0.12;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.05
      );
    }

    const time = state.clock.elapsedTime;

    // 2. Central Energy Core: Subtle breathing pulse & slow spin
    if (innerEnergyRef.current) {
      innerEnergyRef.current.rotation.y -= delta * 0.2;
      innerEnergyRef.current.rotation.z += delta * 0.08;
      const pulse = 1 + Math.sin(time * 1.8) * 0.035;
      innerEnergyRef.current.scale.set(pulse, pulse, pulse);
    }

    // 3. Glass Outer Shell: Slow refractive shift
    if (glassShellRef.current) {
      glassShellRef.current.rotation.y += delta * 0.08;
      glassShellRef.current.rotation.x = Math.sin(time * 0.4) * 0.05;
    }

    // 4. Digital Geometry Wireframe: Alternate slow spin
    if (digitalGeometryRef.current) {
      digitalGeometryRef.current.rotation.y += delta * 0.1;
      digitalGeometryRef.current.rotation.x -= delta * 0.06;
      digitalGeometryRef.current.rotation.z += delta * 0.04;
    }

    // 5. Energy Halos: Slow celestial rotation
    if (halo1Ref.current) {
      halo1Ref.current.rotation.z += delta * 0.12;
      halo1Ref.current.rotation.x = Math.sin(time * 0.3) * 0.25;
    }
    if (halo2Ref.current) {
      halo2Ref.current.rotation.y -= delta * 0.1;
      halo2Ref.current.rotation.z += delta * 0.08;
    }

    // 6. Data Particles Orbiting Wireframe
    if (dataPointsGroupRef.current) {
      dataPointsGroupRef.current.rotation.y += delta * 0.18;
      dataPointsGroupRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.1}
      floatIntensity={isMobile ? 0.2 : 0.35}
    >
      <group ref={groupRef}>
        {/* Layer 1: Central Glowing Energy Core */}
        <mesh ref={innerEnergyRef}>
          <sphereGeometry args={[0.85, 32, 32]} />
          <meshPhysicalMaterial
            color="#4C1D95"
            emissive="#7C3AED"
            emissiveIntensity={1.5}
            roughness={0.15}
            metalness={0.2}
            clearcoat={0.8}
            clearcoatRoughness={0.2}
          />
        </mesh>

        {/* Layer 2: Transparent Refractive Glass Outer Shell */}
        <mesh ref={glassShellRef}>
          <sphereGeometry args={[1.35, 48, 48]} />
          <meshPhysicalMaterial
            transmission={0.92}
            transparent
            opacity={0.85}
            roughness={0.08}
            ior={1.45}
            thickness={0.6}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
            color="#E0F2FE"
            attenuationColor="#8B5CF6"
            attenuationDistance={0.8}
          />
        </mesh>

        {/* Layer 3: Digital Geometry Wireframe (Subtle & Thin) */}
        <mesh ref={digitalGeometryRef}>
          <icosahedronGeometry args={[1.78, 1]} />
          <meshStandardMaterial
            color="#38BDF8"
            emissive="#0284C7"
            emissiveIntensity={0.25}
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>

        {/* Layer 4: Soft Atmospheric Energy Halos */}
        {/* Halo 1: Violet/Indigo Soft Halo */}
        <mesh ref={halo1Ref} rotation={[Math.PI / 3.2, 0.2, 0]}>
          <torusGeometry args={[2.3, 0.008, 16, 100]} />
          <meshBasicMaterial
            color="#8B5CF6"
            transparent
            opacity={0.28}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Halo 2: Cyan Outer Soft Halo */}
        <mesh ref={halo2Ref} rotation={[-Math.PI / 4, -0.3, 0.2]}>
          <torusGeometry args={[2.65, 0.009, 16, 100]} />
          <meshBasicMaterial
            color="#22D3EE"
            transparent
            opacity={0.22}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Layer 5: Data Flow Points on Geometry */}
        <group ref={dataPointsGroupRef}>
          {dataNodes.map((node, idx) => (
            <mesh
              key={idx}
              position={[node.initialX, node.initialY, node.initialZ]}
            >
              <sphereGeometry args={[0.024, 8, 8]} />
              <meshBasicMaterial
                color={idx % 2 === 0 ? "#22D3EE" : "#A78BFA"}
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
          ))}
        </group>

        {/* Layer 6: Minimalist Holographic Identity (ND // DIGITAL CORE) */}
        <Html
          center
          distanceFactor={isMobile ? 10 : 8.5}
          position={[0, 0, 1.48]}
          zIndexRange={[5, 0]}
          className="pointer-events-none select-none"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#080A0D]/75 backdrop-blur-md border border-white/15 shadow-[0_0_25px_rgba(124,58,237,0.35)] whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
            <span className="font-mono font-black text-xs tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-indigo-200 to-cyan-300">
              ND
            </span>
            <span className="w-[1px] h-3 bg-white/20" />
            <span className="text-[9px] font-mono tracking-widest text-slate-300 uppercase">
              DIGITAL CORE
            </span>
          </div>
        </Html>
      </group>
    </Float>
  );
}
