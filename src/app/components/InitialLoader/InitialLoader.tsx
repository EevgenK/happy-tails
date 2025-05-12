'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import s from './InitialLoader.module.css';
import animationData from '../../../../public/animations/loader.json'; // або інший шлях

const InitialLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem('alreadyVisited');
    if (alreadyVisited) {
      setShow(false);
      return;
    }

    sessionStorage.setItem('alreadyVisited', 'true');

    const timeout = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className={s.overlay}>
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};
export default InitialLoader;
