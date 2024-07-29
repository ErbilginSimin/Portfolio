import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";
import { useSeasonColors } from "../../contexts/SeasonColorsContext";

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
  const { firstColor, secondColor, thirdColor, fourthColor, fifthColor } = useSeasonColors();

  const gradientColors = `rgba(${firstColor}, 1), rgba(${secondColor}, 1), rgba(${thirdColor}, 1), rgba(${fourthColor}, 1), rgba(${fifthColor}, 1)`;

  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div className={cn("relative p-[6px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={{
          duration: 8, // Augmenté pour une transition plus lente
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut" // Utilisation d'une courbe de timing fluide
        }}
        style={{
          background: `linear-gradient(45deg, ${gradientColors})`,
          backgroundSize: "400% 400%",
          borderRadius: "22px",
        }}
        className="absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 transition-all duration-500 ease-in-out will-change-transform"
      />
      <div
        className={cn(
          "relative z-10 bg-white rounded-[18px] p-4 sm:p-10",
          className
        )}
        style={{
          border: "none", // Supprimez la bordure interne
        }}
      >
        {children}
      </div>
    </div>
  );
};
