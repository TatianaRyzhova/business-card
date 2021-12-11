import React from "react";
import personalPicture from "../../images/personal_picture.png"
import linkedinIcon from "../../images/linkedin_icon.svg";
import githubIcon from "../../images/github_icon.svg";
import telegramIcon from "../../images/telegram.png";

const data = require("../../data.json")

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <div>
          <img src={personalPicture} alt="personal" className="about-me__personal-photo"/>
        </div>

        <div className="about-me__information">
          <p className="about-me__specialty">{data.specialty}</p>
          <h1 className="about-me__name">{data.name}</h1>
          <p className="about-me__description">{data.description}</p>

          {/*<div className="about-me__links">*/}
          {/*  <a href={cv} className="about-me__link about-me__link_cv" target="_blank" rel="noreferrer">DOWNLOAD CV</a>*/}
          {/*  <a href="#contactForm" className="about-me__link about-me__link_contact">CONTACT</a>*/}
          {/*</div>*/}

          <div className="contact__social-links">
            <a href={data.linkedIn} target="_blank" rel="noreferrer"
               className="contact__social-link">
              <img src={linkedinIcon} alt="linkedin icon" className="contact__social-icon"/>
            </a>
            <a href={data.github} target="_blank" rel="noreferrer"
               className="contact__social-link">
              <img src={githubIcon} alt="github icon" className="contact__social-icon"/>
            </a>
            <a href={data.telegram} target="_blank" rel="noreferrer"
               className="contact__social-link">
              <img src={telegramIcon} alt="telegram icon" className="contact__social-icon"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
