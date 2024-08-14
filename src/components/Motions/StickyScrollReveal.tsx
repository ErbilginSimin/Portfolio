'use client';
import { cn } from '@/utils/cn';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useSeasonColors } from '../../contexts/SeasonColorsContext';
import { BackgroundGradient } from './BackgroundGradient';
import './StickyScrollReveal.scss';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // Uncomment line 22 and comment line 23 if you don't want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const { text } = useSeasonColors();

  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <BackgroundGradient>
      <motion.div
        className="h-[30rem] overflow-y-auto rounded-3xl flex justify-center relative space-x-10 scrollbar-rounded gap-28 bg-white/95 "
        ref={ref}
      >
        <div className="relative flex items-start ">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20 scroll-mt-10">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold"
                  style={{ color: text }}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-lg max-w-sm mt-5"
                  style={{ color: text }}
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>

        <div
          style={{ background: backgroundGradient }}
          className={cn(
            'hidden lg:block size-5/12 h-80 sticky top-10 overflow-hidden rounded-xl shadow-xl',
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </BackgroundGradient>
  );
};
