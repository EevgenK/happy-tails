'use client';
import { FC } from 'react';
import s from './NavBar.module.css';
import ShinyText from '../shared/animations/SnipyText/SnipyText';

const NavBar = () => {
  return (
    <ul className={s.list}>
      <li className={s.card}>
        <ShinyText
          as="a"
          href="#about_curse"
          aria-label="Link which moves to curse description section"
        >
          Про Курс
        </ShinyText>
      </li>

      <li className={s.card}>
        <ShinyText
          additionalClass={s.test}
          as="a"
          speed={3}
          href="#benefits"
          aria-label="Link which moves to about section"
        >
          Переваги
        </ShinyText>
      </li>
      <li className={s.card}>
        <ShinyText
          as="a"
          href="#curses"
          aria-label="Link which moves to about section"
        >
          Курси
        </ShinyText>
      </li>
      <li className={s.card}>
        <ShinyText
          as="a"
          href="#footer"
          aria-label="Link which moves to projects section"
        >
          Контакти
        </ShinyText>
      </li>
    </ul>
  );
};

export default NavBar;
