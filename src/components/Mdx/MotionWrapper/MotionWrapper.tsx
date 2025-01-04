'use client';

import { motion } from 'framer-motion';

export default function MotionWrapper({
  children,
  delay,
  duration,
  tag,
}: {
  children: React.ReactNode;
  delay: number;
  duration: number;
  tag: string;
}) {
  const DynamicMotionComponent = motion(tag);

  return (
    <DynamicMotionComponent
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
      }}
    >
      {children}
    </DynamicMotionComponent>
  );
}
