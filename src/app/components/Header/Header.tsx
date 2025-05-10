'use client';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

import Container from '../shared/Container/Container';
import s from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(s.header, scrolled && s.fixed)}>
      <Container additionalClass={s.container}>
        <Logo />
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
