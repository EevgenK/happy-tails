import { ReactNode } from 'react';
import s from './Container.module.css';
import clsx from 'clsx';

export interface ContainerProps {
  children: ReactNode;
  additionalClass?: string;
}
const Container = ({ children, additionalClass }: ContainerProps) => {
  return <div className={clsx(s.container, additionalClass)}>{children}</div>;
};

export default Container;
