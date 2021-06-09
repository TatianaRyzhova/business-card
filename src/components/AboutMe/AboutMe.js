import React from "react";
import personalPicture from "../../images/personal_picture.png"
import cv from "../../files/tatiana_ryzhova_cv.pdf"

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">

        <div>
          <img src={personalPicture} alt="personal picture" className="about-me__personal-photo"/>
        </div>

        <div className="about-me__information">
          <p className="about-me__specialty">Software Engineer</p>
          <h1 className="about-me__name">Tatiana Ryzhova</h1>
          <p className="about-me__description">I was born and live in Saratov, graduated from the Faculty of Economics at SSU.
            I have a wife
            and daughter. I love listening to music, and I'm also fond of running. Recently started coding. Since 2015,
            he worked at SKB Kontur. After completing a course in web development, I started doing freelance orders and
            left my permanent job.
          </p>

          <div className="about-me__links">
            <a href={cv} className="about-me__link about-me__link_cv" target="_blank" rel="noreferrer">Download CV</a>
            <a href="#" className="about-me__link about-me__link_contact">Contact</a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutMe;
