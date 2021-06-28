import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import InputField from "../InputField/InputField";
import {useFormWithValidation} from "../../hooks/useForm";
import githubIcon from "../../images/github_icon.svg"
import linkedinIcon from "../../images/linkedin_icon.svg"
import arrowPic from "../../images/arrow.png"

function ContactForm() {
  const {values, errors, isValid, handleChange, resetForm} = useFormWithValidation();

  return (
    <section className="contact" id="contactForm">
      <SectionTitle sectionTitle="Contact"/>
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
          </div>

            <img src={arrowPic} alt="arrow" className="arrow-right"/>

        </div>
        {/*<div className="contactForm__social-networks">*/}
        {/*  <ul className='contact__links'>*/}
        {/*    <li>*/}
        {/*      <a href="#" className='contact__link'></a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a href="#" className='contact__link'></a>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}

        <form className="contact__form" noValidate
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
        >
          <InputField
            label={'Full Name'}
            type={'text'}
            name={'name'}
            id={'name-input'}
            placeholder={'e.g. Alex Brown'}
            handleChange={handleChange}
            value={values.name}
            errorName={errors.name}
          />
          <InputField
            label={'Email Address'}
            type={'email'}
            name={'email'}
            id={'email-input'}
            placeholder={'example@domain.com'}
            errorName={errors.email}
            value={values.email}
            handleChange={handleChange}
          />
          {/*<InputField*/}
          {/*  label={'Message'}*/}
          {/*  type={'text'}*/}
          {/*  name={'message'}*/}
          {/*  id={'message-input'}*/}
          {/*  placeholder={'Your message here...'}*/}
          {/*  errorName={errors.message}*/}
          {/*  value={values.message}*/}
          {/*  handleChange={handleChange}*/}
          {/*/>*/}


          <label className="input-field__label">Message
            <span className="input-field__label_start"> *</span>
          </label>
          <textarea name="message" id="message-input" cols="40" rows="10"
            // className="input-field__contact-form"
                    aria-required={"true"}
                    aria-invalid={"false"}
                    placeholder={'Your message here...'}
                    value={values.message}
                    onChange={handleChange}
          >

          </textarea>
          <span id="message-input-error" className="input-error">
            {errors.message || ''}
          </span>

          <button type="submit" disabled={!isValid}
                  className={`form__button ${!isValid && "form__button_disabled"}`}>
            Send message
          </button>
        </form>
      </div>

    </section>
  )
}

export default ContactForm;
