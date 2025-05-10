'use client';
import { FC } from 'react';
import s from './NavBar.module.css';

interface NavBarProps {
  modal?: boolean | string;
  close?: () => void;
}
const NavBar: FC<NavBarProps> = ({ modal, close }) => {
  return (
    <ul className={modal ? s.modal_menu : s.list}>
      <li className={s.card}>
        <a
          onClick={() => modal && close?.()}
          href="#about_curse"
          aria-label="Link which moves to skills section"
        >
          Про Курс
        </a>
      </li>

      <li className={s.card}>
        <a
          onClick={() => modal && close?.()}
          href="#benefits"
          aria-label="Link which moves to about section"
        >
          Переваги
        </a>
      </li>
      <li className={s.card}>
        <a
          onClick={() => modal && close?.()}
          href="#curses"
          aria-label="Link which moves to about section"
        >
          Курси
        </a>
      </li>
      <li className={s.card}>
        <a
          onClick={() => modal && close?.()}
          href="#footer"
          aria-label="Link which moves to projects section"
        >
          Контакти
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
