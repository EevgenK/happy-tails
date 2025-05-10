import { Course } from '../../../app/data/curses';
import Container from '../shared/Container/Container';
import Section from '../shared/Section/Section';
import s from './CursesList.module.css';
import Curse from '../Curse/Curse';

export interface CursesListProps {
  items: Course[];
}
const CursesList = ({ items }: CursesListProps) => {
  const markupItem = (list: Course[]) => {
    return (
      <ul className={s.list}>
        {list.map((item: Course) => (
          <Curse key={item.id} item={item} />
        ))}
      </ul>
    );
  };
  return (
    <Section id="curses" additionalClass={s.section}>
      <Container additionalClass={s.container}>
        <h2 className={s.title}>Маємо для вас два різновиди курсів:</h2>
        {markupItem(items)}
      </Container>
    </Section>
  );
};

export default CursesList;
