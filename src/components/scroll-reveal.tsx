"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export function ScrollReveal({ children, delay = 0, yOffset = 30, className }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: yOffset, filter: "blur(8px)" }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      viewport={{ once: false, margin: "-10%" }} 
    >
      {children}
    </motion.div>
  );
}