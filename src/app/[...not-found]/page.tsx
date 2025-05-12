import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <section className={s.notfound}>
      <h1>Page not found</h1>
      <div className={s.wrap}>
        <h3>404 Error</h3>

        <p>
          Sorry, the page you are looking for could not be found or has been
          removed. You can click on the link below, it will move you on the main
          page of app.
        </p>

        <a className={s.link} href="/">
          Go home
        </a>
      </div>
    </section>
  );
};

export default NotFoundPage;
