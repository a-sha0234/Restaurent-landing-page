import { react, useState } from "react";

export default function Navbar() {
  const [navActive, setNavActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  function navToggle() {
    navActive === "nav__menu"
      ? setNavActive("nav__menu nav__active")
      : setNavActive("nav__menu");

    //toggle icon
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  }

  return (
    <nav className="nav">
      <a href="#home" className="nav__brand">
        pizza4us
      </a>
      <ul className={navActive}>
        <li className="nav__item">
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          {" "}
          <a href="#dishes" className="nav__link">
            Signature Dishes
          </a>
        </li>
        <li className="nav__item">
          {" "}
          <a href="#openTimes" className="nav__link">
            Opening hours
          </a>
        </li>
        <li className="nav__item">
          {" "}
          <a href="#contact" className="nav__link">
            Contact us
          </a>
        </li>
      </ul>

      <div className={toggleIcon} onClick={navToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
