// src/app/test/MotionDiv.tsx
'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

// HTMLMotionProps<'div'> 에 className 과 children 이 누락되는 문제를 방어
type DivProps = HTMLMotionProps<'div'> & {
  children?: React.ReactNode;
  className?: string;
};

const MotionDiv = motion.div as ForwardRefExoticComponent<
  DivProps & RefAttributes<HTMLDivElement>
>;

export default MotionDiv;
