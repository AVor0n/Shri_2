import { Link } from 'react-router-dom';
import './Button.css';

function Button({ text, size, icon, color, href, handlerClick }) {
  return href ? (
    <Link
      className={`button button_size_${size} button__${color}`}
      to={href}
      onClick={handlerClick}
    >
      {icon ? <span className={`icon icon_${icon} button__icon`}></span> : null}
      {text ? <span className="button__text">{text}</span> : null}
    </Link>
  ) : (
    <button
      className={`button button_size_${size} button__${color}`}
      onClick={handlerClick}
    >
      {icon ? <span className={`icon icon_${icon} button__icon`}></span> : null}
      {text ? <span className="button__text">{text}</span> : null}
    </button>
  );
}

export default Button;
