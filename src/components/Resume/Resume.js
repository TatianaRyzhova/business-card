import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import ResumeCard from "../ResumeCard/ResumeCard";

function Resume() {
  return (
    <section className="resume" id="resume">
      <SectionTitle sectionTitle="Resume"/>

      <div className="resume__content">
        <SectionSubtitle sectionSubtitle="Experience"/>
        <div className="resume-card-list">
          <ResumeCard
            period="2014-2017"
            place="Core Partners Soft"
            speciality="QA Automation Engineer"
            description="I was born and live in Saratov, graduated from the Faculty of Economics at SSU.
        I have a wife and daughter. I love listening to music, and I'm also fond of running."
          />

          <ResumeCard
            period="2014-2017"
            place="Core Partners Soft"
            speciality="QA Automation Engineer"
            description="I was born and live in Saratov, graduated from the Faculty of Economics at SSU.
        I have a wife and daughter. I love listening to music, and I'm also fond of running."
          />

          <ResumeCard
            period="2014"
            place="Core Partners Soft"
            speciality="QA Automation Engineer"
            description="I was born and live in Saratov, graduated from the Faculty of Economics at SSU.
        I have a wife and daughter. I love listening to music, and I'm also fond of running."
          />

          <ResumeCard
            period="2014"
            place="Core Partners Soft"
            speciality="QA Automation Engineer"
            description="I was born and live in Saratov, graduated from the Faculty of Economics at SSU.
        I have a wife and daughter. I love listening to music, and I'm also fond of running."
          />

        </div>
      </div>

      <div className="resume__content">
        <SectionSubtitle sectionSubtitle="Education"/>
        <div className="resume-card-list">
          <ResumeCard
            period="2011-2015"
            place="Bauman Moscow State Technical University"
            speciality="Student"
            description="I was born and live in Saratov, graduated from the Faculty of Economics at SSU.
        I have a wife and daughter. I love listening to music, and I'm also fond of running."
          />
        </div>
      </div>

    </section>
  )
}

export default Resume;
