'use client';
import s from './BenefitsList.module.css';
import Section from '../shared/Section/Section';
import { motion } from 'framer-motion';
import { CiSun } from 'react-icons/ci';
import Container from '../shared/Container/Container';
import { Benefit } from '@/app/data/benefits';

export interface BenefitsListProps {
  items: Benefit[];
}

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

const BenefitsList = ({ items }: BenefitsListProps) => {
  return (
    <Section id="benefits">
      <Container additionalClass={s.bg}>
        <h2 className={s.title}>З нами ви отримаєте:</h2>
        <motion.ul
          className={s.list}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={listVariants}
        >
          {items.map(({ benefit, id }, idx) => (
            <motion.li
              variants={itemVariants}
              className={s.benefit}
              key={id}
              custom={idx}
            >
              <CiSun className={s.icon} /> {benefit}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
};

export default BenefitsList;
