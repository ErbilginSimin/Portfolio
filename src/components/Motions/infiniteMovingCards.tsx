import { cn } from '@/utils/cn';
import React, { ReactNode, useEffect, useState } from 'react';
import { useSeasonColors } from '../../contexts/SeasonColorsContext';
import { BackgroundGradient } from '../Motions/BackgroundGradient';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: ReactNode;
    name: ReactNode;
    title: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const { text } = useSeasonColors();

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '160s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <li
            key={`${item.name}-${item.title}`} // Générer une clé unique en combinant `name` et `title`
            className="flex-shrink-0 w-72 h-48 md:w-96 md:h-64"
          >
            <BackgroundGradient className="p-4 rounded-3xl bg-white h-full w-full flex items-center justify-center">
              <blockquote className="relative z-20 text-lg leading-[1.6] text-gray-800 font-normal">
                <span className="block mb-4">{item.quote}</span>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-sm leading-[1.6]"
                    style={{ color: text }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="text-sm leading-[1.6]"
                    style={{ color: text }}
                  >
                    {item.title}
                  </span>
                </div>
              </blockquote>
            </BackgroundGradient>
          </li>
        ))}
      </ul>
    </div>
  );
};
