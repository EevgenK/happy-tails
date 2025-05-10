import Image from 'next/image';
import Container from '../shared/Container/Container';
import Section from '../shared/Section/Section';

import s from './Summary.module.css';

import SkillsList from '../SkillsList/SkillsList';
import Article from '../shared/Article/Article';

const Summary = () => {
  return (
    <Section id="summary">
      <Container additionalClass={s.summary}>
        <Article>
          <p className={s.practice}>
            Курс передбачає <span>90% практики</span>! Ви зможете максимально
            поглибитися в дану професію та працювати в кожній породі окремо. На
            одну породу виділяємо цілий день.
          </p>
          <p className={s.practice}>
            Заняття у групі по 2 - 3 людини, Це дає змогу отримати більше
            інформації тому що другий учень може задавати питання, які Ви не
            задали, або почути ідеї та досвід більше ніж при зайняті самому.
          </p>
        </Article>

        <SkillsList />

        <article className={s.wrap}>
          <Image
            className={s.photo}
            src={'/summary.webp'}
            alt="фото сертифікатів"
            width={300}
            height={350}
          ></Image>

          <p className={s.practice}>
            Після завершення курсу, та успішно складеного іспиту ви отримаєте
            <span> сертифікат</span> про закінчення базового навчання!
          </p>
          <p className={s.practice}>
            Фото з навчання ви вже можете використовувати для залучення своїх
            перших клієнтів.
          </p>
          <p className={s.practice}>
            Дамо повну інформацію з підбору інструментів, та косметики. А також
            наші учні мають можливість придбати інструменти та косметику зі
            знижкою.
          </p>
        </article>
      </Container>
    </Section>
  );
};

export default Summary;
