'use client';
import { useMemo, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';

import s from './CircularText.module.css';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  additionalClass?: string;
  centerImage?: React.ReactNode;
}

const CircularText = ({
  text,
  spinDuration = 30,
  onHover = 'speedUp',
  additionalClass = '',
  centerImage,
}: CircularTextProps) => {
  const letters = Array.from(text);
  const controls = useAnimation();

  const letterStyles = useMemo(() => {
    return letters.map((_, i) => {
      const rotation = (360 / letters.length) * i;
      const factor = Math.PI / letters.length;
      const x = factor * i;
      const y = factor * i;
      const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;
      return { transform, WebkitTransform: transform };
    });
  }, [letters.length]);

  const startRotation = (duration = spinDuration) => {
    controls.start({
      rotate: [0, 360],
      transition: {
        duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  };

  const handleHoverStart = () => {
    switch (onHover) {
      case 'speedUp':
        startRotation(spinDuration / 6);
        break;
      case 'slowDown':
        startRotation(spinDuration * 2);
        break;
      case 'pause':
        controls.stop();
        break;
      case 'goBonkers':
        startRotation(1);
        break;
    }
  };

  const handleHoverEnd = () => {
    startRotation();
  };

  useEffect(() => {
    startRotation();
  }, []);

  return (
    <motion.div
      className={clsx(s.circular_text, additionalClass)}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {centerImage && <div className={s.logoWrapper}>{centerImage}</div>}
      {letters.map((letter, i) => (
        <span key={i} style={letterStyles[i]}>
          {letter}
        </span>
      ))}
    </motion.div>
  );
};

export default CircularText;
