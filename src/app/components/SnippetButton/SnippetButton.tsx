'use client';
import { MdConnectWithoutContact } from 'react-icons/md';
import s from './SnippetButton.module.css';
import { useMemo, useState } from 'react';
import { contacts } from '@/app/data/contacts';
import clsx from 'clsx';
import { useRadialAnimation } from '@/app/utils/hooks/useRadialAnimation';

const SnippetButton = () => {
  const [show, setShow] = useState(false);
  const socials = useMemo(
    () => contacts.filter(({ item, type }) => !item || type === 'phone'),
    [contacts],
  );
  const points = useRadialAnimation(socials.length, show, 55, 240, 100);

  return (
    <button className={s.main} onClick={() => setShow(!show)}>
      <MdConnectWithoutContact className={s.icon} />
      {socials.map(({ icon: Icon, type, link }, idx) => {
        const { x, y, visible } = points[idx];
        return (
          <a
            key={type}
            className={clsx(s.contact, visible && s.animate)}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link which allows to contact by ${type}`}
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transitionDelay: `${(idx + 1) * 100}ms`,
            }}
          >
            {Icon && <Icon />}
          </a>
        );
      })}
    </button>
  );
};

export default SnippetButton;
