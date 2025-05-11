import clsx from 'clsx';
import s from './SnipyText.module.css';
import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
type ShinyTextProps<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  disabled?: boolean;
  speed?: number;
  additionalClass?: string;
} & ComponentPropsWithRef<T>;

const ShinyText = <T extends ElementType = 'div'>({
  as: Tag = 'div',
  children,
  disabled = false,
  speed = 5,
  additionalClass = '',
  ...rest
}: ShinyTextProps<T>) => {
  const animationDuration = `${speed}s`;

  return (
    <Tag
      className={clsx(s.shiny_text, disabled && s.disabled, additionalClass)}
      style={{ animationDuration }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default ShinyText;
