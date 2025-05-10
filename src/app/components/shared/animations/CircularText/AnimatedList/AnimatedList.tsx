'use client';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import s from './AnimatedList.module.css';

import { Skill } from '@/app/data/skills';

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const itemVariants = {
  hidden: (i: number) => ({
    x: i % 2 === 0 ? -200 : 200,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  },
};

export interface AnimatedListProps {
  items: Skill[];
  title: string;
  Icon: IconType;
  additionalClass?: {
    list: string;
    title: string;
    item: string;
    icon?: string;
    wrap?: string;
  };
}
const AnimatedList = ({
  items,
  title,
  Icon,
  additionalClass,
}: AnimatedListProps) => {
  return (
    <div className={additionalClass?.wrap}>
      <h2 className={additionalClass?.title}>{title}</h2>
      <motion.ul
        className={additionalClass?.list}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={listVariants}
      >
        {items.map(({ item, id }, idx) => (
          <motion.li
            variants={itemVariants}
            className={additionalClass?.item}
            key={id}
            custom={idx}
          >
            {Icon && <Icon className={additionalClass?.icon} />} {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default AnimatedList;
