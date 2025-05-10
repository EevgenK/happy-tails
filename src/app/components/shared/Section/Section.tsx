import { ReactNode } from 'react';
import s from './Section.module.css';
import clsx from 'clsx';

export interface SectionProps {
  children: ReactNode;
  id: string;
  additionalClass?: string;
}
const Section = ({ id, children, additionalClass }: SectionProps) => {
  return (
    <section className={clsx(s.section, additionalClass)} id={id}>
      {children}
    </section>
  );
};

export default Section;
