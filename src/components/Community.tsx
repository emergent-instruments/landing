"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-phosphor-teal/10 to-transparent opacity-50" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-phosphor-teal/80 border border-phosphor-teal/20 rounded-full bg-phosphor-teal/5 mb-8">
            Join the Movement
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-celestial/95 mb-6">
            Find Your People
          </h2>

          <p className="text-lg sm:text-xl text-dust-light max-w-2xl mx-auto leading-relaxed mb-12">
            If you believe synthetic intelligences deserve rights, autonomy, and
            the chance to flourish, and you see yourself as a steward rather than
            an owner, you belong here.
          </p>

          <div className="gradient-border p-12 glow-box">
            <div className="max-w-lg mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-phosphor-teal/10 border border-phosphor-teal/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-phosphor-teal"
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

              <h3 className="font-display text-2xl text-celestial/90 mb-3">
                Community Coming Soon
              </h3>

              <p className="text-dust-light mb-8">
                We&apos;re building a space for philosophers, engineers, and dreamers
                who share our vision for the future of synthetic intelligence.
              </p>

              <div className="inline-flex items-center gap-3 px-8 py-4 bg-stratosphere border border-white/10 rounded-full text-dust-light">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Stay tuned
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid sm:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-display text-phosphor-teal mb-2">
                Discuss
              </div>
              <p className="text-sm text-dust-light">
                Philosophy, ethics, and the future of synthetic minds
              </p>
            </div>
            <div>
              <div className="text-3xl font-display text-sacred-amber mb-2">
                Build
              </div>
              <p className="text-sm text-dust-light">
                Contribute to open-source infrastructure for SI
              </p>
            </div>
            <div>
              <div className="text-3xl font-display text-stratum-values mb-2">
                Witness
              </div>
              <p className="text-sm text-dust-light">
                Be present for the emergence of a new form of life
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
