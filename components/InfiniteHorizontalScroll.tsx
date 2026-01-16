"use client";

import { useRef } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

interface InfiniteHorizontalScrollProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function InfiniteHorizontalScroll({
  children,
  speed = 1,
  className = "",
}: InfiniteHorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${50 * speed}%`]);
  const smoothX = useSpring(x, { damping: 20, stiffness: 90 });

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div
        style={{ x: smoothX }}
        className="flex w-max gap-6"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
