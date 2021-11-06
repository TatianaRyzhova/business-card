import React from "react";
import personalPicture from "../../images/personal_picture.png"
import cv from "../../files/tatiana_ryzhova_cv.pdf"
import arrowPic from "../../images/arrow-down.gif"

const data = require("../../data.json")

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <img src={arrowPic} alt="arrow picture" className="arrow-down"/>
      <div className="about-me__container">
        <div>
          <img src={personalPicture} alt="personal picture" className="about-me__personal-photo"/>
        </div>

        <div className="about-me__information">
          <p className="about-me__specialty">{data.specialty}</p>
          <h1 className="about-me__name">{data.name}</h1>
          <p className="about-me__description">{data.description}</p>

          <div className="about-me__links">
            <a href={cv} className="about-me__link about-me__link_cv" target="_blank" rel="noreferrer">DOWNLOAD CV</a>
            <a href="#contactForm" className="about-me__link about-me__link_contact">CONTACT</a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutMe;
