"use client";
import { useEffect, useRef } from "react";

export default function FloatingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let stars: { x: number; y: number; r: number; d: number }[] = [];
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2,
        d: Math.random() * 1,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "white";
      ctx.shadowBlur = 5;
      ctx.shadowColor = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2, false);
        ctx.fill();
      });
      update();
    }

    function update() {
      for (let i = 0; i < stars.length; i++) {
        let s = stars[i];
        s.y += s.d;
        if (s.y > h) {
          s.y = 0;
          s.x = Math.random() * w;
        }
      }
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
