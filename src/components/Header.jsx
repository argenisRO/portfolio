import { Link, NavLink } from "react-router-dom";
import DropMenu from "./DropMenu";
import { useRef } from "react";

export default function Header() {
  const menuItems = useRef(null);

  return (
    <header>
      <nav className="navbar">
        <Link to="#" className="logo">
          @ArgenisRO
        </Link>
        <DropMenu menuItems={menuItems} />
        <ul ref={menuItems} className="all-menu-items">
          <li className="menu-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
