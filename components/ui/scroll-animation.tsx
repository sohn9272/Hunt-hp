'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollAnimation({
  children,
  className = '',
  delay = 0,
}: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: 'linear',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
