"use client";

import { useState, useRef, MouseEvent } from "react";
import Image, { ImageProps } from "next/image";

interface MagnifyingImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  zoomLevel?: number;
  lensSize?: number;
  className?: string;
}

export function MagnifyingImage({
  src,
  alt,
  zoomLevel = 2,
  lensSize = 150,
  className = "",
  ...props
}: MagnifyingImageProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    setLensPosition({ x, y });

    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    setImagePosition({ x: bgX, y: bgY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        className="object-cover transition-opacity duration-200"
        style={{ opacity: isHovering ? 0.5 : 1 }}
        {...props}
      />

      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full border-2 border-white/80 shadow-2xl z-10"
          style={{
            left: lensPosition.x - lensSize / 2,
            top: lensPosition.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
            backgroundImage: `url(${src})`,
            backgroundSize: `${zoomLevel * 100}%`,
            backgroundPosition: `${imagePosition.x}% ${imagePosition.y}%`,
            backgroundRepeat: "no-repeat",
            boxShadow:
              "0 0 0 2px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        />
      )}
    </div>
  );
}
