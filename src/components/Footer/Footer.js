import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper footer__wrapper">
        <div className="footer__links-wrapper">
          <a className="footer__link" href="#!">
            Support
          </a>
          <a className="footer__link" href="#!">
            Learning
          </a>
          <a className="footer__link" href="#!">
            Русская версия
          </a>
        </div>
        <a className="footer__link" href="#!">
          © 2021 Andrey Voronin
        </a>
      </div>
    </footer>
  );
}

export default Footer;
