import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import ContactForm from "../ContactForm/ContactForm";
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
      <ContactForm/>

    </main>
)
}

export default Main;
