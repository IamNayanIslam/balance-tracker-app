import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  const navbarStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "#5662f6",
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink to="/" style={navbarStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={navbarStyles}>
        About
      </NavLink>
      <NavLink to="/products" style={navbarStyles}>
        Products
      </NavLink>
      <NavLink to="/about" style={navbarStyles}>
        About
      </NavLink>
      <NavLink to="/about" style={navbarStyles}>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
