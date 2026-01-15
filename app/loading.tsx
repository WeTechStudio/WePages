"use client";

import { motion } from "framer-motion";
import { SkeletonCard } from "@/components/ui/SkeletonCard";

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4" />
          <div className="h-6 w-96 bg-gray-200 dark:bg-gray-700 rounded mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard
              key={i}
              showImage
              imageAspect="aspect-[4/3]"
              lines={3}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
