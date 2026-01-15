"use client";

import { motion } from "framer-motion";
import { SkeletonImage } from "./SkeletonImage";
import { SkeletonText } from "./SkeletonText";

interface SkeletonCardProps {
  showImage?: boolean;
  imageAspect?: string;
  lines?: number;
  className?: string;
}

export function SkeletonCard({
  showImage = true,
  imageAspect = "aspect-[4/3]",
  lines = 3,
  className = "",
}: SkeletonCardProps) {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {showImage && (
        <div className="mb-4">
          <SkeletonImage aspectRatio={imageAspect} />
        </div>
      )}
      <div className="space-y-3">
        <SkeletonText lines={2} lineHeight="h-5" />
        <SkeletonText lines={lines} lineHeight="h-4" />
      </div>
    </motion.div>
  );
}
