import './Header.css';

function Header({ text, children, black }) {
  const color = black ? 'black' : '';
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <h1 className={`title header__title ${color}`}>{text}</h1>
        <div className="header__buttons">{children}</div>
      </div>
    </header>
  );
}

export default Header;
