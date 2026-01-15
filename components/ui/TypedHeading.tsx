"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedHeadingProps {
  words: string[];
  className?: string;
}

export function TypedHeading({ words, className = "" }: TypedHeadingProps) {
  const typedRef = useRef<HTMLSpanElement>(null);
  const instanceRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    instanceRef.current = new Typed(typedRef.current, {
      strings: words,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
      }
    };
  }, [words]);

  return (
    <span className={className}>
      <span ref={typedRef} />
    </span>
  );
}
