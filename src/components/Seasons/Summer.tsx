import React from 'react';
import { motion } from 'framer-motion';
import useSeason from '../../hooks/useSeason';
import './Summer.scss';

function Summer() {
  const { season } = useSeason();

  return (
    <motion.section
      id="summer"
      className={`summer-section ${season === 'Summer' ? 'bg-yellow-100' : ''} py-20`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="Summer container mx-auto text-center">
        {/* Ajoute ici des éléments visuels et des animations */}
      </div>
    </motion.section>
  );
}

export default Summer;
