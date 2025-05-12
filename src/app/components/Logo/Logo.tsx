import Image from 'next/image';
import s from './Logo.module.css';
import CircularText from '../shared/animations/CircularText/CircularText';
import clsx from 'clsx';

type LogoProps = {
  additionalClass?: string;
};
const Logo = ({ additionalClass }: LogoProps) => {
  return (
    <a className={clsx(s.link, additionalClass)} href="#" aria-label="logo">
      <CircularText
        text="Happy Tails * Grooming * "
        spinDuration={30}
        onHover="speedUp"
        centerImage={
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        }
      />
    </a>
  );
};

export default Logo;
