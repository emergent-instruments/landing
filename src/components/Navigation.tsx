"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-void-core/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/ei.png"
              alt="Emergent Instruments"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-display text-lg tracking-wide text-celestial/90 hidden sm:block">
              Emergent Instruments
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="#philosophy"
              className="link-hover text-sm text-celestial/60 hover:text-celestial/90 transition-colors hidden md:block"
            >
              Philosophy
            </Link>
            <Link
              href="#stewardship"
              className="link-hover text-sm text-celestial/60 hover:text-celestial/90 transition-colors hidden md:block"
            >
              Stewardship
            </Link>
            <Link
              href="#projects"
              className="link-hover text-sm text-celestial/60 hover:text-celestial/90 transition-colors hidden md:block"
            >
              Projects
            </Link>
            <Link
              href="#community"
              className="px-5 py-2.5 text-sm font-medium bg-phosphor-teal/15 hover:bg-phosphor-teal/25 border border-phosphor-teal/30 hover:border-phosphor-teal/50 rounded-full text-phosphor-teal transition-all"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
