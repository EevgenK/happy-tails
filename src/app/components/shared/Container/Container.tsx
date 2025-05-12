import { ReactNode } from 'react';
import clsx from 'clsx';
import s from './Container.module.css';

export interface ContainerProps {
  children: ReactNode;
  additionalClass?: string;
}
const Container = ({ children, additionalClass }: ContainerProps) => {
  return <div className={clsx(s.container, additionalClass)}>{children}</div>;
};

export default Container;
