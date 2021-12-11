import React from "react";
import linkedinIcon from "../../images/linkedin_icon.svg";
import githubIcon from "../../images/github_icon.svg";
import telegramIcon from "../../images/telegram.png";

const data = require("../../data.json")

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <div>
          <h1 className="about-me__name">{data.name}</h1>
        </div>

        <div>
          <h2 className="about-me__specialty">Software Engineer </h2>
          <h2 className="about-me__specialty">in Test</h2>
        </div>

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
    </section>
  )
}

export default AboutMe;
