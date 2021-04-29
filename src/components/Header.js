import logo from '../images/logo/logo.svg';

function Header() {
  return (
    <header className="header page__section">
      <img className="logo" src={logo} alt="Логотип Mesto Russia" />
    </header>
  );
}

export default Header;
