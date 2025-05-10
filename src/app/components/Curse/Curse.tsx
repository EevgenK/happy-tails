'use client';
import { Course } from '@/app/data/curses';
import s from './Curse.module.css';
import { useState } from 'react';
import { LuCalendarDays } from 'react-icons/lu';
import clsx from 'clsx';

export interface CurseProps {
  item: Course;
}

const Curse = ({ item }: CurseProps) => {
  const { id, title, days, price, salePrice } = item;
  const [selectedDay, setSelectedDay] = useState(1);
  const current = days.find((d) => d.day === selectedDay);
  const formattedPrice = price.toLocaleString('uk-UA');
  const formattedSale = salePrice?.toLocaleString('uk-UA');

  return (
    <li className={clsx(s.card, s[`bg_${id}`])}>
      <h3>{title}</h3>
      <div className={s.wrap}>
        <ul className={s.buttons}>
          {days.map(({ day }, idx) => (
            <li className={s.days} key={day + idx}>
              <button
                aria-label={`Вибір дня для курсу ${title}`}
                className={clsx(s.button, day === selectedDay && s.active)}
                type="button"
                onClick={() => setSelectedDay(day)}
                aria-current={day === selectedDay ? 'true' : 'false'}
              >
                <LuCalendarDays className={s.icon} />
                {day}
              </button>
            </li>
          ))}
        </ul>
        <article className={s.description}>
          <h4>Програма на день {selectedDay}: </h4>
          <p className={s.current}>{current?.description}</p>
          <p>
            Серед курсу обов'язково є вихідні, щоб ви могли відпочити після
            роботи з великою кількістю інформації.{' '}
          </p>
          <p>
            Вартість курсу -{' '}
            <mark className={clsx(s.price, salePrice && s.strike)}>
              {formattedPrice}
            </mark>{' '}
            {!!salePrice && (
              <mark className={clsx(s.price, s.sale)}>{formattedSale}</mark>
            )}{' '}
            грн.
          </p>
        </article>
      </div>
    </li>
  );
};

export default Curse;
