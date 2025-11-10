"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

export function CTAButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = {
    rest: { scale: 1 },
    hover: prefersReduced
      ? { scale: 1 }
      : {
          scale: 1.04,
          transition: { type: "spring", stiffness: 320, damping: 22 },
        },
    tap: prefersReduced
      ? { scale: 1 }
      : {
          scale: 0.99,
          transition: { type: "spring", stiffness: 420, damping: 24 },
        },
  };

  return (
    <MotionLink
      href={href}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      className={cn(
        "cta",
        "relative inline-flex items-center justify-center rounded-full px-8 py-3",
        "text-primary border border-primary/25 bg-primary/8",
        "btn-focus",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </MotionLink>
  );
}
