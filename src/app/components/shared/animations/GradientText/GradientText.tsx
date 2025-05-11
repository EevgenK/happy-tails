import clsx from 'clsx';
import s from './GradientText.module.css';
import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';

type GradientTextProps<T extends ElementType = 'div'> = {
  as: T;
  children: ReactNode;
  additionalClass?: string;
  colors?: [string, string, string, string, string];
  animationSpeed?: number;
  showBorder: boolean;
} & ComponentPropsWithRef<T>;

const GradientText = <T extends ElementType>({
  as: Tag,
  children,
  additionalClass = '',
  colors = ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'], // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false,
  ...rest // Default overlay visibility
}: GradientTextProps<T>) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <Tag className={clsx(s.animated_gradient_text, additionalClass)} {...rest}>
      {showBorder && (
        <div className={s.gradient_overlay} style={gradientStyle}></div>
      )}
      <div className={s.text_content} style={gradientStyle}>
        {children}
      </div>
    </Tag>
  );
};
export default GradientText;
