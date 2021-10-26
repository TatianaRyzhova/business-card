import React from "react";

function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__links'>
        <li>
          <a href="#about-me" className="navigation__link" >About Me</a>
        </li>
        <li>
          <a href="#contactForm" className="navigation__link" >Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
