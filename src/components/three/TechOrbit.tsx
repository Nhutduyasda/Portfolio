"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface TechOrbitProps {
  isMobile?: boolean;
}

interface TechNodeDef {
  name: string;
  color: string;
  orbitIndex: 0 | 1 | 2;
  speed: number;
  initialPhase: number;
  mobileVisible: boolean;
}

const TECH_NODES: TechNodeDef[] = [
  { name: "React", color: "#22D3EE", orbitIndex: 0, speed: 0.16, initialPhase: 0, mobileVisible: true },
  { name: "TypeScript", color: "#38BDF8", orbitIndex: 0, speed: 0.16, initialPhase: Math.PI, mobileVisible: false },
  { name: ".NET 8", color: "#A78BFA", orbitIndex: 1, speed: 0.12, initialPhase: 0.7, mobileVisible: true },
  { name: "Next.js", color: "#F8FAFC", orbitIndex: 1, speed: 0.12, initialPhase: 0.7 + Math.PI, mobileVisible: false },
  { name: "AI / Vision", color: "#34D399", orbitIndex: 2, speed: 0.09, initialPhase: 1.8, mobileVisible: true },
  { name: "SQL Server", color: "#F472B6", orbitIndex: 2, speed: 0.09, initialPhase: 1.8 + Math.PI, mobileVisible: false },
];

export default function TechOrbit({ isMobile = false }: TechOrbitProps) {
  const nodeRefs = useRef<(THREE.Group | null)[]>([]);
  const badgeDivRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Construct 3 calibrated, compact non-symmetric elliptical orbits around the Developer Core
  const { orbitLines, curves, orbitRotations } = useMemo(() => {
    // Orbit 1: Inner horizontal ellipse
    const c1 = new THREE.EllipseCurve(0, 0, 2.15, 1.5, 0, Math.PI * 2, false, 0);
    const r1 = new THREE.Euler(Math.PI / 4.5, 0.25, -0.15);

    // Orbit 2: Mid diagonal ellipse
    const c2 = new THREE.EllipseCurve(0, 0, 2.7, 1.9, 0, Math.PI * 2, false, 0);
    const r2 = new THREE.Euler(-Math.PI / 3.8, -0.35, Math.PI / 7);

    // Orbit 3: Outer ellipse
    const c3 = new THREE.EllipseCurve(0, 0, 3.25, 2.3, 0, Math.PI * 2, false, 0);
    const r3 = new THREE.Euler(Math.PI / 3.2, 0.5, -Math.PI / 5);

    const makeLine = (curve: THREE.EllipseCurve, euler: THREE.Euler, color: string, opacity: number) => {
      const points = curve.getPoints(128).map((p) => {
        const v = new THREE.Vector3(p.x, p.y, 0);
        v.applyEuler(euler);
        return v;
      });
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
      });
      return new THREE.Line(geom, mat);
    };

    const l1 = makeLine(c1, r1, "#A78BFA", 0.18);
    const l2 = makeLine(c2, r2, "#22D3EE", 0.15);
    const l3 = makeLine(c3, r3, "#818CF8", 0.12);

    return {
      curves: [c1, c2, c3],
      orbitRotations: [r1, r2, r3],
      orbitLines: [l1, l2, l3],
    };
  }, []);

  const activeNodes = useMemo(() => {
    return isMobile ? TECH_NODES.filter((n) => n.mobileVisible) : TECH_NODES;
  }, [isMobile]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    activeNodes.forEach((node, i) => {
      const group = nodeRefs.current[i];
      if (!group) return;

      const curve = curves[node.orbitIndex];
      const euler = orbitRotations[node.orbitIndex];

      // Normalized parameter t in [0, 1]
      const phase = (node.initialPhase + time * node.speed) % (Math.PI * 2);
      const t = phase / (Math.PI * 2);

      const point2D = curve.getPoint(t);
      const pos3D = new THREE.Vector3(point2D.x, point2D.y, 0);
      pos3D.applyEuler(euler);

      group.position.copy(pos3D);

      const badgeDiv = badgeDivRefs.current[i];
      if (badgeDiv) {
        // 1. Occlude completely when behind the core (eliminates ghost text inside the sphere)
        const distFromCenter2D = Math.sqrt(pos3D.x * pos3D.x + pos3D.y * pos3D.y);
        const isBehindCore = pos3D.z < 0.4 && distFromCenter2D < 1.95;

        // 2. Hide when orbiting in back hemisphere (z < -0.1)
        // Nodes are only shown when traversing the visible front arc
        const isBackArc = pos3D.z < -0.1;

        // 3. Smooth fade out on left text boundary
        const xFade = isMobile
          ? 1
          : THREE.MathUtils.clamp((pos3D.x + 0.6) / 1.0, 0, 1);

        // 4. Smooth fade out on depth transition
        const zFade = THREE.MathUtils.clamp((pos3D.z + 0.1) / 0.8, 0, 1);

        if (isBehindCore || isBackArc) {
          badgeDiv.style.opacity = "0";
          badgeDiv.style.visibility = "hidden";
        } else {
          const opacity = Math.min(1, Math.max(0, zFade * xFade));
          badgeDiv.style.opacity = opacity.toFixed(2);
          badgeDiv.style.visibility = opacity < 0.05 ? "hidden" : "visible";
        }
      }
    });
  });

  return (
    <group>
      {/* 3 Delicate Elliptical Trajectories */}
      {orbitLines.map((line, idx) => (
        <primitive key={idx} object={line} />
      ))}

      {/* Orbiting Technology Nodes */}
      {activeNodes.map((node, index) => (
        <group
          key={node.name}
          ref={(el) => {
            nodeRefs.current[index] = el;
          }}
        >
          {/* 
            NOTE: We DO NOT render an overlapping 3D mesh sphere here at [0,0,0],
            because it renders directly over the letters of the HTML text badge!
            The badge below already contains its own clean, glowing colored dot 
            positioned on the left with proper flexbox spacing.
          */}
          <Html
            center
            distanceFactor={isMobile ? 12 : 9.5}
            zIndexRange={[5, 0]}
            className="pointer-events-none select-none"
          >
            <div
              ref={(el) => {
                badgeDivRefs.current[index] = el;
              }}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#080A0D]/90 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.7)] whitespace-nowrap transition-opacity duration-200 pointer-events-none select-none"
            >
              {/* Clean single indicator dot on the left of text - guaranteed never to overlap letters */}
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  backgroundColor: node.color,
                  boxShadow: `0 0 8px ${node.color}`,
                }}
              />
              <span className="tracking-tight font-medium select-none">
                {node.name}
              </span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}
