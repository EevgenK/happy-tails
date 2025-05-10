import { contacts, Contact } from '@/app/data/contacts';
import s from './ContactList.module.css';
import clsx from 'clsx';

const ContactList = () => {
  const items = contacts.filter(({ item }) => item);
  const socials = contacts.filter(({ item }) => !item);

  const renderContact = (items: Contact[]) => {
    return items.map(({ type, link, item, icon: Icon }) => (
      <li key={type}>
        {' '}
        <a
          className={clsx(s.link, !item && s.social_link, s[type])}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link which allows to contact by ${type}`}
        >
          {Icon && <Icon />}
          {!!item && <span>{item}</span>}
        </a>
      </li>
    ));
  };
  return (
    <div className={s.wrap}>
      <ul className={s.contacts}>{renderContact(items)}</ul>
      <ul className={s.socials}>{renderContact(socials)}</ul>
    </div>
  );
};

export default ContactList;
