import React from "react";
import AboutMe from "../AboutMe/AboutMe";
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
      {/*<ContactForm/>*/}
    </main>
  )
}

export default Main;
