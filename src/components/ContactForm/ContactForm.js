import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import githubIcon from "../../images/github_icon.svg"
import linkedinIcon from "../../images/linkedin_icon.svg"
import arrowPic from "../../images/arrow.png"
import telegramIcon from "../../images/telegram.png";

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
              Tatiana Ryzhova
            </h4>
            <p className="contact__text_speciality">Software Engineer</p>
          </div>
          <ul>
            <li>
              <p className="contact__text">
                <span>PHONE: </span>
                +49 152 378 068 22
              </p>
            </li>
            <li>
              <p className="contact__text">
                <span>E-MAIL: </span>
                tanyaryzhova93@gmail.com
              </p>
            </li>
            <li>
              <p className="contact__text">
                <span>ADDRESS: </span>
                Berlin, Germany
              </p>
            </li>
          </ul>
          <div className="contact__social-links">
            <a href="https://www.linkedin.com/in/%F0%9F%96%87tatiana-ryzhova-36961b16a/" target="_blank"
               className="contact__social-link">
              <img src={linkedinIcon} alt="linkedin icon" className="contact__social-icon"/>
            </a>
            <a href="https://github.com/TatianaRyzhova" target="_blank"
               className="contact__social-link">
              <img src={githubIcon} alt="github icon" className="contact__social-icon"/>
            </a>
            <a href="https://t.me/tanya_tiny" target="_blank"
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
