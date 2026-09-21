"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  dispX: number;
  dispY: number;
  vxDisp: number;
  vyDisp: number;
  radius: number;
  baseOpacity: number;
  currentOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  layer: 0 | 1 | 2; // 0 = far, 1 = mid, 2 = near
  driftVx: number;
  driftVy: number;
  color: string;
  parallaxFactor: number;
  scrollFactor: number;
  repulsionFactor: number;
}

interface ShootingStar {
  active: boolean;
  startX: number;
  startY: number;
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  startTime: number;
  duration: number;
}

const STAR_COLORS = [
  "#FFFFFF",
  "#CBD5E1",
  "#94A3B8",
  "#CBD5E1",
  "#FFFFFF",
  "#94A3B8",
  "#A78BFA", // rare accent: violet
  "#22D3EE", // rare accent: cyan
];

export default function InteractiveStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Detect capabilities
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile =
      window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;

    // Target counts
    const starCount = isMobile ? 65 : 150;
    const stars: Star[] = [];

    // Mouse tracking & lerping
    const targetMouse = { x: -1000, y: -1000, isHovering: false };
    const currentMouse = { x: -1000, y: -1000 };
    let scrollY = window.scrollY || 0;

    // Shooting star state
    const shootingStar: ShootingStar = {
      active: false,
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      angle: 0,
      opacity: 0,
      startTime: 0,
      duration: 0,
    };
    let lastShootingStarTime = performance.now() + 10000; // First shooting star after 10-15s

    // Helper: Initialize a star
    const createStar = (w: number, h: number): Star => {
      const rand = Math.random();
      // Layer distribution: 50% far, 35% mid, 15% near
      let layer: 0 | 1 | 2 = 0;
      let radius = 0.5;
      let baseOpacity = 0.3;
      let parallaxFactor = 1.5;
      let scrollFactor = 0.005;
      let repulsionFactor = 0.3;
      let speedScale = 1;

      if (rand < 0.5) {
        layer = 0; // Far
        radius = 0.4 + Math.random() * 0.3; // 0.4 - 0.7px
        baseOpacity = 0.2 + Math.random() * 0.25; // 0.2 - 0.45
        parallaxFactor = 1.5;
        scrollFactor = 0.005;
        repulsionFactor = 0.25;
        speedScale = 0.7;
      } else if (rand < 0.85) {
        layer = 1; // Mid
        radius = 0.7 + Math.random() * 0.4; // 0.7 - 1.1px
        baseOpacity = 0.35 + Math.random() * 0.3; // 0.35 - 0.65
        parallaxFactor = 3.5;
        scrollFactor = 0.01;
        repulsionFactor = 0.55;
        speedScale = 1.0;
      } else {
        layer = 2; // Near
        radius = 1.1 + Math.random() * 0.65; // 1.1 - 1.75px
        baseOpacity = 0.55 + Math.random() * 0.35; // 0.55 - 0.9
        parallaxFactor = 6.5;
        scrollFactor = 0.015;
        repulsionFactor = 0.95;
        speedScale = 1.35;
      }

      // 85% celestial white/grey, 15% purple/cyan accent
      const colorChoice = Math.random();
      let color = "#CBD5E1";
      if (colorChoice < 0.45) {
        color = "#FFFFFF";
      } else if (colorChoice < 0.8) {
        color = "#94A3B8";
      } else if (colorChoice < 0.9) {
        color = "#A78BFA"; // subtle violet
      } else {
        color = "#22D3EE"; // subtle cyan
      }

      const x = Math.random() * w;
      const y = Math.random() * h;

      // Ultra-slow drift: ±0.015 to ±0.035
      const driftVx = (Math.random() - 0.5) * 0.04 * speedScale;
      const driftVy = (Math.random() - 0.5) * 0.04 * speedScale;

      return {
        x,
        y,
        baseX: x,
        baseY: y,
        dispX: 0,
        dispY: 0,
        vxDisp: 0,
        vyDisp: 0,
        radius,
        baseOpacity,
        currentOpacity: baseOpacity,
        twinkleSpeed: 0.006 + Math.random() * 0.018,
        twinklePhase: Math.random() * Math.PI * 2,
        layer,
        driftVx: prefersReducedMotion ? 0 : driftVx,
        driftVy: prefersReducedMotion ? 0 : driftVy,
        color,
        parallaxFactor,
        scrollFactor,
        repulsionFactor,
      };
    };

    // Resize handling
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Populate or update stars
      if (stars.length === 0) {
        for (let i = 0; i < starCount; i++) {
          stars.push(createStar(width, height));
        }
      } else {
        // Adjust existing stars within bounds
        stars.forEach((star) => {
          if (star.baseX > width) star.baseX = Math.random() * width;
          if (star.baseY > height) star.baseY = Math.random() * height;
        });
      }
    };

    resizeCanvas();

    // Event listeners
    const handlePointerMove = (e: PointerEvent) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
      targetMouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      targetMouse.isHovering = false;
      targetMouse.x = -1000;
      targetMouse.y = -1000;
    };

    const handleScroll = () => {
      scrollY = window.scrollY || 0;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    // Visibility change handling (pause RAF when tab is inactive)
    let isTabVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animationFrameId) {
        lastShootingStarTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Spawn rare subtle shooting star (once every 25-40s)
    const triggerShootingStar = (now: number) => {
      if (shootingStar.active || isMobile || prefersReducedMotion) return;
      if (now - lastShootingStarTime < 25000 + Math.random() * 15000) return;

      lastShootingStarTime = now;
      const startX = Math.random() * (width * 0.8) + width * 0.1;
      const startY = Math.random() * (height * 0.4) + height * 0.05;
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3; // ~45 deg downward-right
      const length = 70 + Math.random() * 50; // 70-120px
      const duration = 650 + Math.random() * 250; // 650-900ms

      shootingStar.active = true;
      shootingStar.startX = startX;
      shootingStar.startY = startY;
      shootingStar.x = startX;
      shootingStar.y = startY;
      shootingStar.length = length;
      shootingStar.speed = 1.2;
      shootingStar.angle = angle;
      shootingStar.opacity = 0;
      shootingStar.startTime = now;
      shootingStar.duration = duration;
    };

    // Render loop
    const render = (timestamp: number) => {
      if (!isTabVisible) {
        animationFrameId = 0;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      if (targetMouse.isHovering) {
        currentMouse.x += (targetMouse.x - currentMouse.x) * 0.08;
        currentMouse.y += (targetMouse.y - currentMouse.y) * 0.08;
      } else {
        // Softly retreat cursor influence offscreen
        currentMouse.x += (-1000 - currentMouse.x) * 0.05;
        currentMouse.y += (-1000 - currentMouse.y) * 0.05;
      }

      // Parallax center ratio
      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const mouseRatioX =
        targetMouse.isHovering ? (currentMouse.x - centerX) / centerX : 0;
      const mouseRatioY =
        targetMouse.isHovering ? (currentMouse.y - centerY) / centerY : 0;

      const interactionRadius = 140;
      const interactionRadiusSq = interactionRadius * interactionRadius;

      // Render & update all stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // 1. Idle slow drift
        if (!prefersReducedMotion) {
          star.baseX += star.driftVx;
          star.baseY += star.driftVy;

          // Wrap edges smoothly
          if (star.baseX < -10) star.baseX = width + 10;
          if (star.baseX > width + 10) star.baseX = -10;
          if (star.baseY < -10) star.baseY = height + 10;
          if (star.baseY > height + 10) star.baseY = -10;
        }

        // 2. Mouse Repulsion & Spring Return
        let targetDispX = 0;
        let targetDispY = 0;

        if (targetMouse.isHovering && !prefersReducedMotion) {
          const effectiveX = star.baseX + star.dispX;
          const effectiveY = star.baseY + star.dispY;
          const dx = effectiveX - currentMouse.x;
          const dy = effectiveY - currentMouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < interactionRadiusSq && distSq > 0.001) {
            const dist = Math.sqrt(distSq);
            // Smooth cubic falloff
            const normDist = 1 - dist / interactionRadius;
            const force = normDist * normDist * 28 * star.repulsionFactor;
            targetDispX = (dx / dist) * force;
            targetDispY = (dy / dist) * force;
          }
        }

        // Spring ease towards target displacement
        star.dispX += (targetDispX - star.dispX) * 0.09;
        star.dispY += (targetDispY - star.dispY) * 0.09;

        // 3. Subtle Parallax & Scroll Offset
        const parallaxX = -mouseRatioX * star.parallaxFactor;
        const parallaxY = -mouseRatioY * star.parallaxFactor;
        const scrollOffsetY = (scrollY * star.scrollFactor) % height;

        let renderX = star.baseX + star.dispX + parallaxX;
        let renderY = star.baseY + star.dispY + parallaxY - scrollOffsetY;

        // Ensure inside screen modulo bounds
        if (renderY < 0) renderY += height;
        if (renderY > height) renderY -= height;
        if (renderX < 0) renderX += width;
        if (renderX > width) renderX -= width;

        // 4. Subtle Twinkle
        if (!prefersReducedMotion) {
          star.twinklePhase += star.twinkleSpeed;
          // Sine modulation between 0.35 and 1.05 of baseOpacity
          const twinkleMod = 0.7 + 0.35 * Math.sin(star.twinklePhase);
          star.currentOpacity = Math.max(
            0.12,
            Math.min(1, star.baseOpacity * twinkleMod)
          );
        } else {
          star.currentOpacity = star.baseOpacity;
        }

        // 5. Draw Star
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.currentOpacity;
        ctx.fill();
      }

      // 6. Handle Rare Shooting Star
      triggerShootingStar(timestamp);

      if (shootingStar.active) {
        const elapsed = timestamp - shootingStar.startTime;
        const progress = elapsed / shootingStar.duration;

        if (progress >= 1) {
          shootingStar.active = false;
        } else {
          // Fade in then fade out smoothly
          const alpha =
            progress < 0.25
              ? progress / 0.25
              : 1 - (progress - 0.25) / 0.75;
          const currentOpacity = Math.max(0, alpha * 0.45); // Max opacity 0.45 (subtle)

          const distTraveled = progress * 320; // 320px total sweep
          const currentX =
            shootingStar.startX + Math.cos(shootingStar.angle) * distTraveled;
          const currentY =
            shootingStar.startY + Math.sin(shootingStar.angle) * distTraveled;

          const tailX =
            currentX - Math.cos(shootingStar.angle) * shootingStar.length;
          const tailY =
            currentY - Math.sin(shootingStar.angle) * shootingStar.length;

          const grad = ctx.createLinearGradient(tailX, tailY, currentX, currentY);
          grad.addColorStop(0, "rgba(255, 255, 255, 0)");
          grad.addColorStop(0.7, "rgba(167, 139, 250, 0.4)");
          grad.addColorStop(1, "rgba(255, 255, 255, 0.9)");

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(currentX, currentY);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.2;
          ctx.globalAlpha = currentOpacity;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      // Reset global alpha
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]"
    >
      {/* Deep Space Ambient Subtle Radial Glows */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(124,58,237,0.04),transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_85%_65%,rgba(34,211,238,0.025),transparent_70%)]" />

      {/* Lightweight 2D Interactive Starfield Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
