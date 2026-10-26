import React, { useEffect, useRef } from "react";

export const BackgroundFog: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Drifting particles (fine cosmic dust & neural embers)
    const particleCount = Math.min(50, Math.floor((width * height) / 25000));
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.35 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: -Math.random() * 0.25 - 0.05,
      hue: Math.random() > 0.3 ? 195 : 42, // Steel teal or soft gold
    }));

    // Soft volumetric fog blobs
    const blobs = [
      { x: width * 0.25, y: height * 0.3, radius: width * 0.35, vx: 0.08, vy: 0.05 },
      { x: width * 0.75, y: height * 0.65, radius: width * 0.4, vx: -0.06, vy: 0.07 },
    ];

    let t = 0;
    const render = () => {
      t += 0.005;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw volumetric ambient gradients
      blobs.forEach((blob, idx) => {
        blob.x += Math.sin(t + idx) * blob.vx;
        blob.y += Math.cos(t + idx) * blob.vy;

        const grad = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );

        if (idx === 0) {
          // Cold teal / steel blue spotlight glow (#9FC4D0)
          grad.addColorStop(0, "rgba(78, 135, 156, 0.055)");
          grad.addColorStop(0.5, "rgba(22, 34, 45, 0.02)");
          grad.addColorStop(1, "rgba(7, 9, 11, 0)");
        } else {
          // Deep charcoal / subtle gold hue
          grad.addColorStop(0, "rgba(201, 169, 106, 0.025)");
          grad.addColorStop(0.6, "rgba(13, 17, 23, 0.015)");
          grad.addColorStop(1, "rgba(7, 9, 11, 0)");
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw drifting dust particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.hue === 195) {
          ctx.fillStyle = `rgba(159, 196, 208, ${p.alpha})`;
        } else {
          ctx.fillStyle = `rgba(201, 169, 106, ${p.alpha * 0.8})`;
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
