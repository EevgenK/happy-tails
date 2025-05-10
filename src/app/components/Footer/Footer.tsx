import ContactList from '../ContactList/ContactList';
import Logo from '../Logo/Logo';
import Container from '../shared/Container/Container';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={s.footer}>
      <Container additionalClass={s.container}>
        <ContactList />

        <a
          className={s.author}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link which allows to contact with developer of wep-site`}
          href="https://portfolio-react-gamma-orcin.vercel.app/"
        >
          <p>&copy; 2025</p>
          <span>Made by K.E.</span>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
