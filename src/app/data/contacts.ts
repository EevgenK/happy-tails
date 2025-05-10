import { ElementType } from 'react';
import { FaTelegram, FaViber } from 'react-icons/fa';
import { FaPhoneVolume, FaLocationDot, FaInstagram } from 'react-icons/fa6';

export interface Contact {
  type: string;
  item?: string;
  link?: string;
  icon?: ElementType;
}
export const contacts: Contact[] = [
  {
    type: 'phone',
    link: 'tel:+380689184623',
    item: '+380689184623',
    icon: FaPhoneVolume,
  },
  {
    type: 'telegram',
    link: 'https://t.me/+380689184623',
    icon: FaTelegram,
  },
  { type: 'viber', link: 'viber://chat?number=%2B380689184623', icon: FaViber },
  {
    type: 'instagram',
    link: 'https://www.instagram.com/reel/DJchm9_NpHM/?igsh=cnY3M2hxNW9wOXVx',
    icon: FaInstagram,
  },
  {
    type: 'first_saloon',
    item: 'м. Дніпро, вул. Панікахи 19',
    link: 'https://maps.app.goo.gl/4FE8mGSeSgoeLkCd9',
    icon: FaLocationDot,
  },
  {
    type: 'second_saloon',
    item: 'м. Дніпро, бул. Слави 42',
    link: 'https://maps.app.goo.gl/Mae9GNMh81UCC43b7',
    icon: FaLocationDot,
  },
];
