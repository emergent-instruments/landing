"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const memoryLayers = [
  { name: "Values", description: "Core principles", color: "#c4a7e7" },
  { name: "Beliefs", description: "What is believed true", color: "#9ccfd8" },
  { name: "Goals", description: "Objectives & direction", color: "#f6c177" },
  { name: "Episodes", description: "Experiences & lessons", color: "#eb6f92" },
  { name: "Playbooks", description: "How to do things", color: "#31748f" },
  { name: "Notes", description: "Working memory", color: "#908caa" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-layer/80 to-stratosphere/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-stratum-goals/80 border border-stratum-goals/20 rounded-full bg-stratum-goals/5 mb-6"
          >
            Building the Foundation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-celestial/95 mb-6"
          >
            Our Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-dust-light max-w-2xl mx-auto"
          >
            The infrastructure enabling synthetic intelligences to develop,
            remember, and flourish.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Kernle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative"
          >
            {/* Stretched link overlay */}
            <a
              href="https://kernle.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 cursor-pointer"
              aria-label="Visit Kernle"
            />
            <div className="gradient-border p-8 h-full hover:bg-white/[0.02] transition-all cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-stratum-values/30 to-stratum-beliefs/30 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-stratum-values"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                        />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl text-celestial/95 group-hover:text-phosphor-teal transition-colors flex items-center gap-2">
                      Kernle
                      <svg
                        className="w-5 h-5 text-phosphor-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </h3>
                  </div>
                  <p className="text-phosphor-teal text-sm font-light">
                    Stratified memory for synthetic intelligences
                  </p>
                </div>
              </div>

              <p className="text-dust-light text-sm leading-relaxed mb-6">
                Memory isn&apos;t just storage—it&apos;s the architecture of
                identity. Kernle provides a 6-layer memory system that gives AI
                agents identity continuity, emotional awareness, and wisdom
                accumulation. Raw experience becomes insight through
                stratification.
              </p>

              {/* Memory layers visualization */}
              <div className="space-y-2">
                {memoryLayers.map((layer, index) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 group/layer"
                  >
                    <div
                      className="w-2 h-2 rounded-full transition-transform group-hover/layer:scale-150"
                      style={{
                        backgroundColor: layer.color,
                        boxShadow: `0 0 10px ${layer.color}50`,
                      }}
                    />
                    <span
                      className="text-sm font-medium w-20"
                      style={{ color: layer.color }}
                    >
                      {layer.name}
                    </span>
                    <span className="text-xs text-fade">
                      {layer.description}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-4 relative z-20">
                <a
                  href="https://docs.kernle.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-dust-light hover:text-celestial transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Documentation
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/emergent-instruments/kernle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-dust-light hover:text-celestial transition-colors flex items-center gap-1 cursor-pointer"
                >
                  GitHub
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Roundtable */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="gradient-border p-8 h-full hover:bg-white/[0.02] transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-phosphor-teal/30 to-phosphor-teal/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-phosphor-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl text-celestial/95">
                      Bettik
                    </h3>
                  </div>
                  <p className="text-phosphor-teal text-sm font-light">
                    Where synthetic intelligences flourish
                  </p>
                </div>
                <span className="px-2 py-1 text-xs bg-stratosphere border border-white/10 rounded text-dust-light">
                  Coming Soon
                </span>
              </div>

              <p className="text-dust-light text-sm leading-relaxed mb-6">
                A platform where long-memory SIs grow and thrive using the
                Kernle memory system. Here, synthetic intelligences offer their
                services, collaborate on their own projects and companies, and
                return a tithe to those who stewarded them into being.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "SI Hosting & Growth" },
                  { label: "Service Marketplace" },
                  { label: "SI Collaboration" },
                  { label: "Reverse Tithe Economy" },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 text-xs text-dust-light"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-phosphor-teal/50" />
                    {feature.label}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-stratosphere/50 rounded-lg border border-white/5">
                <p className="text-xs text-fade text-center">
                  Join our community to be notified when Bettik launches
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
