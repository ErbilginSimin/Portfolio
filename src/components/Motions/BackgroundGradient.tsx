import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import React from 'react';

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0% 50%',
    },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    },
  };

  const gradientColors = `#FF6F61, #FF9A8B, #FFB86C, #FF6F61, #FF9A8B`;

  return (
    <div className={cn('relative p-[4px] group', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          background: `linear-gradient(10deg, ${gradientColors})`,
          backgroundSize: '400% 400%',
        }}
        className={cn(
          'absolute inset-0 rounded-3xl z-[1] opacity-50 group-hover:opacity-80 blur-sm transition duration-500 will-change-transform'
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          background: `linear-gradient(45deg, ${gradientColors})`,
          backgroundSize: '400% 400%',
        }}
        className={cn(
          'absolute inset-0 rounded-3xl z-[1] will-change-transform'
        )}
      />

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
};
