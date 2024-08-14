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
  const { firstColor, secondColor, thirdColor, fourthColor, fifthColor } =
    useSeasonColors(); // Get the colors for the current season

  const variants = {
    initial: {
      backgroundPosition: '0% 50%',
    },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    },
  };

  // Construct the gradient as a string
  const gradient = `
    radial-gradient(circle farthest-side at 0% 100%, rgb(${firstColor}), transparent),
    radial-gradient(circle farthest-side at 100% 0%, rgb(${secondColor}), transparent),
    radial-gradient(circle farthest-side at 100% 100%, rgb(${thirdColor}), transparent),
    radial-gradient(circle farthest-side at 0% 0%, rgb(${fourthColor}), rgb(${fifthColor}))
  `;

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
          backgroundImage: gradient, // Apply the gradient as a background image
          backgroundSize: '400% 400%',
        }}
        className={cn(
          'absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-sm transition duration-500 will-change-transform'
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
          backgroundImage: gradient, // Apply the gradient as a background image
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
