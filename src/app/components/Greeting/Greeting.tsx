import ShinyText from '../shared/animations/SnipyText/SnipyText';
import Article from '../shared/Article/Article';
import Container from '../shared/Container/Container';
import Section from '../shared/Section/Section';
import s from './Greeting.module.css';

const Greeting = () => {
  return (
    <Section id="greeting">
      <Container additionalClass={s.bg}>
        <ShinyText as="h1" additionalClass={s.title} speed={6}>
          Твій шлях до нової професії — почни вже сьогодні!
        </ShinyText>

        <Article>
          <p className={s.text}>
            Запрошуємо на практичний курс «Салонний грумінг з нуля» у Дніпрі.
          </p>
          <p className={s.text}>
            Після проходження навчання — безкоштовна практика в наших двох
            працюючих салонах.
          </p>
          <p className={s.text}>
            {' '}
            Професія грумера відкриває багато можливостей: робота у зоосалонах,
            ветеринарних клініках, чи створення власного бізнесу.
          </p>
          <p className={s.text}>
            Отримуй нові знання та навички — і вже незабаром заробляй від 20 000
            грн щомісяця.
          </p>
        </Article>
      </Container>
    </Section>
  );
};

export default Greeting;
