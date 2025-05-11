'use client';
import s from './BenefitsList.module.css';
import Section from '../shared/Section/Section';

import { CiSun } from 'react-icons/ci';
import Container from '../shared/Container/Container';
import { benefits } from '@/app/data/benefits';

import AnimatedList from '../shared/animations/AnimatedList/AnimatedList';

const BenefitsList = () => {
  return (
    <Section id="benefits">
      <Container additionalClass={s.bg}>
        <AnimatedList
          items={benefits}
          title="З нами ви отримаєте:"
          Icon={CiSun}
          additionalClass={{
            wrap: s.wrap,
            list: s.list,
            title: s.title,
            item: s.item,
            icon: s.icon,
          }}
        />
      </Container>
    </Section>
  );
};

export default BenefitsList;
