import s from './page.module.css';
import Greeting from './components/Greeting/Greeting';
import BenefitsList from './components/BenefitsList/BenefitsList';

import Details from './components/Details/Details';
import { curses } from './data/curses';
import CursesList from './components/CursesList/CursesList';
import Summary from './components/Summary/Summary';

export default function Home() {
  return (
    <>
      <Greeting />
      <Details />
      <BenefitsList />
      <CursesList items={curses} />
      <Summary />
    </>
  );
}
