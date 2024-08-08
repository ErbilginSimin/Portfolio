import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import React from 'react';
import { useSeasonColors } from '../../contexts/SeasonColorsContext';

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
  const { background } = useSeasonColors(); // Get the background color for the current season

  const variants = {
    initial: {
      backgroundPosition: '0% 50%',
    },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    },
  };

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
          background: `linear-gradient(10deg, ${background})`,
          backgroundSize: '400% 400%',
        }}
        className={cn(
          'absolute inset-0 rounded-3xl z-[1] opacity-50 group-hover:opacity-80 blur-lg transition duration-500 will-change-transform'
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
          background: `linear-gradient(45deg, ${background})`,
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
