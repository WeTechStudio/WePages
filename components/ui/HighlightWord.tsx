interface HighlightWordProps {
  children: React.ReactNode;
  variant?: "hw1" | "hw2" | "hw3";
  className?: string;
}

export function HighlightWord({ children, variant = "hw1", className = "" }: HighlightWordProps) {
  const variants = {
    hw1: "text-stone-600 dark:text-stone-400",
    hw2: "text-neutral-600 dark:text-neutral-400",
    hw3: "text-zinc-600 dark:text-zinc-400",
  };

  return (
    <span className={`${variants[variant]} font-semibold ${className}`}>
      {children}
    </span>
  );
}
