import Image from 'next/image';
import s from './Logo.module.css';
import CircularText from '../shared/animations/CircularText/CircularText';

const Logo = () => {
  return (
    <a className={s.link} href="/" aria-label="logo">
      {/* <span className={s.text}>Happy Tails</span>
      <Image
        className={s.logo}
        src="/logo.png"
        alt="logo"
        width={40}
        height={40}
      ></Image>
      <span className={s.text}>Grooming</span> */}
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
