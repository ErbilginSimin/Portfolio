'use client';
import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  containerClassName?: string;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  containerClassName,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main className={containerClassName}>
      <div
        className={cn(
          'relative flex flex-col h-[100vh] items-center justify-center bg-[rgb(239,249,238)] text-black transition-bg', // Fond bleu clair
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,rgb(241,246,244)_0%,rgb(241,246,244)_7%,var(--transparent)_10%,var(--transparent)_12%,rgb(241,246,244)_16%)]
            [--aurora:repeating-linear-gradient(100deg,rgb(0,204,92)_10%,rgb(0,128,0)_20%,rgb(0,171,145)_30%,rgb(0,255,0)_40%,rgb(0,69,0)_50%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
