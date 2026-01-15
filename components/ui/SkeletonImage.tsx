"use client";

import { motion } from "framer-motion";

interface SkeletonImageProps {
  aspectRatio?: string;
  className?: string;
  rounded?: boolean;
}

export function SkeletonImage({
  aspectRatio = "aspect-video",
  className = "",
  rounded = true,
}: SkeletonImageProps) {
  return (
    <motion.div
      className={`${aspectRatio} bg-gray-200 dark:bg-gray-700 ${
        rounded ? "rounded-lg" : ""
      } ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
