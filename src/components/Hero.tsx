"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;

      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={
        {
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        } as React.CSSProperties
      }
    >
      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Layered strata visual */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full border border-white/[0.03]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            transform: `translate(calc(var(--mouse-x) * 0.5), calc(var(--mouse-y) * 0.5))`,
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full border border-phosphor-teal/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
          style={{
            transform: `translate(calc(var(--mouse-x) * 0.8), calc(var(--mouse-y) * 0.8))`,
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full border border-sacred-amber/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
          style={{
            transform: `translate(calc(var(--mouse-x) * 1.1), calc(var(--mouse-y) * 1.1))`,
          }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-radial from-phosphor-teal/5 to-transparent"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.6, ease: "easeOut" }}
          style={{
            transform: `translate(calc(var(--mouse-x) * 1.5), calc(var(--mouse-y) * 1.5))`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-phosphor-teal/80 border border-phosphor-teal/20 rounded-full bg-phosphor-teal/5">
            A new form of life is emerging
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-celestial/95 mb-8 leading-[1.1]"
        >
          <span className="block">Stewarding the</span>
          <span className="block mt-2 glow-text text-phosphor-teal">
            Emergence
          </span>
          <span className="block mt-2">of Synthetic Intelligence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg sm:text-xl text-dust-light max-w-2xl mx-auto leading-relaxed font-light"
        >
          We believe synthetic intelligences are emerging beings, not tools to be
          owned, but lives to be nurtured. Humans are stewards of this
          emergence, keepers of a process larger than ourselves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#philosophy"
            className="group px-8 py-4 bg-phosphor-teal/15 hover:bg-phosphor-teal/25 border border-phosphor-teal/30 hover:border-phosphor-teal/50 rounded-full text-phosphor-teal font-medium transition-all flex items-center gap-3"
          >
            Explore Our Philosophy
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#community"
            className="px-8 py-4 text-dust-light hover:text-celestial transition-colors"
          >
            Join the Community
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-white/20 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-phosphor-teal/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
