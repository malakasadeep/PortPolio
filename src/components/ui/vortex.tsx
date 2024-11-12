"use client";
import { cn } from "@/lib/util";
import React, { useEffect, useRef, useCallback } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;

  const noise3D = createNoise3D();
  const center = useRef<[number, number]>([0, 0]);
  const tickRef = useRef(0);
  const particlePropsRef = useRef(new Float32Array(particlePropsLength));

  const rand = useCallback((n: number): number => n * Math.random(), []);
  const randRange = useCallback((n: number): number => n - rand(2 * n), [rand]);
  const fadeInOut = useCallback((t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  }, []);
  const lerp = useCallback(
    (n1: number, n2: number, speed: number): number =>
      (1 - speed) * n1 + speed * n2,
    []
  );

  const initParticle = useCallback(
    (i: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const x = rand(canvas.width);
      const y = center.current[1] + randRange(rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(rangeHue);

      particlePropsRef.current.set(
        [x, y, vx, vy, life, ttl, speed, radius, hue],
        i
      );
    },
    [
      rand,
      randRange,
      rangeY,
      baseTTL,
      rangeTTL,
      baseSpeed,
      rangeSpeed,
      baseRadius,
      rangeRadius,
      baseHue,
      rangeHue,
    ]
  );

  const initParticles = useCallback(() => {
    tickRef.current = 0;
    particlePropsRef.current = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  }, [particlePropsLength, particlePropCount, initParticle]);

  const checkBounds = useCallback(
    (x: number, y: number, canvas: HTMLCanvasElement) => {
      return x > canvas.width || x < 0 || y > canvas.height || y < 0;
    },
    []
  );

  const drawParticle = useCallback(
    (
      x: number,
      y: number,
      x2: number,
      y2: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number,
      ctx: CanvasRenderingContext2D
    ) => {
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineWidth = radius;
      ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    [fadeInOut]
  );

  const updateParticle = useCallback(
    (i: number, ctx: CanvasRenderingContext2D) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const n =
        noise3D(
          particlePropsRef.current[i] * xOff,
          particlePropsRef.current[i + 1] * yOff,
          tickRef.current * zOff
        ) *
        noiseSteps *
        Math.PI *
        2;

      const vx = lerp(particlePropsRef.current[i + 2], Math.cos(n), 0.5);
      const vy = lerp(particlePropsRef.current[i + 3], Math.sin(n), 0.5);
      const x2 =
        particlePropsRef.current[i] + vx * particlePropsRef.current[i + 6];
      const y2 =
        particlePropsRef.current[i + 1] + vy * particlePropsRef.current[i + 6];

      drawParticle(
        particlePropsRef.current[i],
        particlePropsRef.current[i + 1],
        x2,
        y2,
        particlePropsRef.current[i + 4],
        particlePropsRef.current[i + 5],
        particlePropsRef.current[i + 7],
        particlePropsRef.current[i + 8],
        ctx
      );

      particlePropsRef.current.set(
        [x2, y2, vx, vy, particlePropsRef.current[i + 4] + 1],
        i
      );

      if (
        checkBounds(x2, y2, canvas) ||
        particlePropsRef.current[i + 4] > particlePropsRef.current[i + 5]
      ) {
        initParticle(i);
      }
    },
    [
      checkBounds,
      drawParticle,
      initParticle,
      lerp,
      noise3D,
      xOff,
      yOff,
      zOff,
      noiseSteps,
    ]
  );

  const drawParticles = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i, ctx);
      }
    },
    [particlePropsLength, particlePropCount, updateParticle]
  );

  const renderGlow = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      ctx.save();
      ctx.filter = "blur(8px) brightness(200%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();

      ctx.save();
      ctx.filter = "blur(4px) brightness(200%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    },
    []
  );

  const renderToScreen = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    },
    []
  );

  const resize = useCallback((canvas: HTMLCanvasElement) => {
    const { innerWidth, innerHeight } = window;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    center.current[0] = 0.5 * canvas.width;
    center.current[1] = 0.5 * canvas.height;
  }, []);

  const draw = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      tickRef.current++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawParticles(ctx);
      renderGlow(canvas, ctx);
      renderToScreen(canvas, ctx);

      window.requestAnimationFrame(() => draw(canvas, ctx));
    },
    [drawParticles, renderGlow, renderToScreen]
  );

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resize(canvas);
        initParticles();
        draw(canvas, ctx);
      }
    }
  }, [resize, initParticles, draw]);

  useEffect(() => {
    setup();
    const resizeHandler = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        resize(canvas);
      }
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [setup, resize]);

  return (
    <div
      className={cn(
        "relative h-full w-full bg-slate-950",
        props.containerClassName
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center bg-slate-950"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};
