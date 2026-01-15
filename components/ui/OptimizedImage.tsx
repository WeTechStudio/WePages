"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  blurDataURL?: string;
  alt: string;
}

export function OptimizedImage({
  src,
  alt,
  blurDataURL,
  className = "",
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        {isLoading && blurDataURL && (
          <motion.div
            key="blur"
            className="absolute inset-0 z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={blurDataURL}
              alt=""
              fill
              className="object-cover"
              sizes="1px"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="relative"
      >
        <Image
          src={src}
          alt={alt}
          priority={priority}
          onLoad={() => setIsLoading(false)}
          className="object-cover"
          {...props}
        />
      </motion.div>
    </div>
  );
}
