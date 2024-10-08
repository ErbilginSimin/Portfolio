import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { useSeasonColors } from '../../contexts/SeasonColorsContext';

export const FlipWords = ({
  words,
  duration = 1000, // Vous pouvez définir une durée par défaut ici
  className = 'FlipWords',
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const { text } = useSeasonColors(); // Appeler le hook ici
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    // Lorsque `isAnimating` est false, attendez la durée spécifiée
    const timer = setTimeout(() => {
      if (!isAnimating) {
        startAnimation();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          duration: duration / 1000,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className={`z-10 inline-block relative text-left px-2 ${className}`}
        style={{ color: text }}
        key={currentWord}
      >
        {currentWord.split('').map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
