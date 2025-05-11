'use client';

import { skills } from '@/app/data/skills';
import AnimatedList from '../shared/animations/AnimatedList/AnimatedList';
import { SiStudyverse } from 'react-icons/si';
import s from './SkillsList.module.css';
const SkillsList = () => {
  return (
    <AnimatedList
      items={skills}
      title="На курсі ви навчитеся:"
      Icon={SiStudyverse}
      additionalClass={{
        wrap: s.wrap,
        list: s.list,
        title: s.title,
        item: s.item,
        icon: s.icon,
      }}
    />
  );
};

export default SkillsList;
