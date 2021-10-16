import { Link } from 'react-router-dom';
import './Footer.css';

function Footer({ links, copyright }) {
  let i = 0;
  return (
    <footer className="footer">
      <div className="wrapper footer__wrapper">
        <div className="footer__links">
          {links?.map(({ text, href }) => (
            <Link className="footer__link" to={href} key={i++}>
              <span>{text}</span>
            </Link>
          ))}
        </div>
        <span className="footer__text">{copyright}</span>
      </div>
    </footer>
  );
}

export default Footer;
