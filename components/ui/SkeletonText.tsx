"use client";

import { motion } from "framer-motion";

interface SkeletonTextProps {
  lines?: number;
  className?: string;
  lineHeight?: string;
}

export function SkeletonText({
  lines = 1,
  className = "",
  lineHeight = "h-4",
}: SkeletonTextProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className={`w-full ${lineHeight} bg-gray-200 dark:bg-gray-700 rounded`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: i === lines - 1 && lines > 1 ? "60%" : undefined,
          }}
        />
      ))}
    </div>
  );
}
