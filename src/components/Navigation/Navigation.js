import React from "react";

function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__links'>
        <li>
          <a href="#" className="navigation__link" >About Me</a>
        </li>
        <li>
          <a href="#" className="navigation__link" >Resume</a>
        </li>
        <li>
          <a href="#" className="navigation__link" >Portfolio</a>
        </li>
        <li>
          <a href="#" className="navigation__link" >Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;