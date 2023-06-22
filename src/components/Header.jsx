import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import githubIcon from "../assets/svg/github-icon.svg";
import linkedinIcon from "../assets/svg/linkedin-icon.svg";
import Icon from "./Icon";
import DropMenu from "./DropMenu";

export default function Header() {
  const menuItems = useRef(null);
  const menuIcons = useRef(null);

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" className="logo">
            @ArgenisRO
          </Link>
        </div>

        {/* Link Icons */}
        <div ref={menuIcons} className="menu-icons">
          <Icon alias={"github"} img={githubIcon} link={""} />
          <Icon alias={"linkedin"} img={linkedinIcon} link={""} />
        </div>

        {/* Navigation Menu */}
        <DropMenu menuItems={menuItems} menuIcons={menuIcons} />
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
