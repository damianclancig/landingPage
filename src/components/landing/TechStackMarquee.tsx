"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stackItems = [
  { name: "Next.js", type: "Modern", color: "text-zinc-100" },
  { name: "React", type: "Modern", color: "text-blue-400" },
  { name: "Node.js", type: "Modern", color: "text-green-500" },
  { name: "TailwindCSS", type: "Modern", color: "text-cyan-400" },
  { name: "TypeScript", type: "Modern", color: "text-blue-500" },
  { name: "Flutter", type: "Mobile", color: "text-blue-300" },
  { name: "React Native", type: "Mobile", color: "text-blue-400" },
  { name: "Java", type: "Enterprise", color: "text-orange-500" },
  { name: "C# (.NET)", type: "Enterprise", color: "text-purple-500" },
  { name: "SQL Server", type: "Enterprise", color: "text-red-500" },
  { name: "VB6", type: "Legacy", color: "text-blue-700" },
];

export default function TechStackMarquee() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Duplicate items to ensure smooth infinite scrolling
  const duplicatedItems = [...stackItems, ...stackItems, ...stackItems];

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-background border-y border-border/40">
      
      {/* Decorative gradient edges for fading effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-full items-center justify-center mb-8 px-10 text-center">
        <p className="font-code text-sm text-muted-foreground uppercase tracking-wider leading-relaxed">
          Dominio Polyglot: Desde Modern Full-Stack a Legacy Enterprise
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap items-center shrink-0"
          animate={{ x: "-33.33%" }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group mx-6 flex h-16 sm:h-20 min-w-[140px] flex-col items-center justify-center rounded-lg border border-border/50 bg-card px-6 transition-all duration-300 hover:border-border hover:shadow-[0_0_15px_rgba(45,212,191,0.15)]"
            >
              <span className="font-code text-lg sm:text-x font-bold text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {item.name}
              </span>
              <span className="mt-1 font-body text-[10px] sm:text-xs text-muted-foreground/60 tracking-widest uppercase">
                {item.type}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
