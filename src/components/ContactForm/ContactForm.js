import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import githubIcon from "../../images/github_icon.svg"
import linkedinIcon from "../../images/linkedin_icon.svg"
import arrowPic from "../../images/arrow.png"
import telegramIcon from "../../images/telegram.png";

const data = require("../../data.json")

function ContactForm() {
  return (
    <section className="contact" id="contactForm">
      <SectionTitle sectionTitle="Let's talk"/>
      <div className="contact__content">
        <div className=" contact__information"
             data-aos="fade-right"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000"
        >
          <div className="contact__name">
            <h4 className="contact__text_name">
              {data.name}
            </h4>
            <p className="contact__text_speciality">{data.specialty}</p>
          </div>
          <ul>
            <li>
              <p className="contact__text">
                <span>PHONE: </span>
                {data.phone}
              </p>
            </li>
            <li>
              <p className="contact__text">
                <span>E-MAIL: </span>
                {data.email}
              </p>
            </li>
            <li>
              <p className="contact__text">
                <span>ADDRESS: </span>
                {data.address}
              </p>
            </li>
          </ul>
          <div className="contact__social-links">
            <a href={data.linkedIn} target="_blank"
               className="contact__social-link">
              <img src={linkedinIcon} alt="linkedin icon" className="contact__social-icon"/>
            </a>
            <a href={data.github} target="_blank"
               className="contact__social-link">
              <img src={githubIcon} alt="github icon" className="contact__social-icon"/>
            </a>
            <a href={data.telegram} target="_blank"
               className="contact__social-link">
              <img src={telegramIcon} alt="telegram icon" className="contact__social-icon"/>
            </a>
          </div>
          <img src={arrowPic} alt="arrow" className="arrow-right"/>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;
