import headerLogo from "../assets/logo.png";
import "./Header.css";
import "./Index.css";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="header logo" />
      <h1 className="header__title">Vite Practice</h1>
    </div>
  );
}

export default Header;
