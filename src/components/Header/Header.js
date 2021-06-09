import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header>
      <div className='header__container'>

        <Logo/>
        <Navigation/>

      </div>
    </header>
  )
}

export default Header;
