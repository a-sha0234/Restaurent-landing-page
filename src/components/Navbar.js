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
      <a href="#" className="nav__brand">
        pizza
      </a>
      <ul className={navActive}>
        <li className="nav__item">
          <a href="#">Home</a>
        </li>
        <li className="nav__item">
          {" "}
          <a href="#">menu</a>
        </li>
        <li className="nav__item">
          {" "}
          <a href="#">opening hours</a>
        </li>
        <li className="nav__item">
          {" "}
          <a href="#">contact us</a>
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
