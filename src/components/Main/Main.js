import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {
  AOS.init({
    duration: 1200,
  })

  return (
    <main className="content">

      <AboutMe/>
      <Resume/>
      <Portfolio/>

    </main>
)
}

export default Main;
