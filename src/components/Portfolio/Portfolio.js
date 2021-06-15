import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import firstPic from "../../images/one-unsplash.jpg"
import secondPic from "../../images/two-unsplash.jpg"
import thirdPic from "../../images/three-unsplash.jpg";
import forthPic from "../../images/four-unsplash.jpg";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <SectionTitle sectionTitle="Portfolio"/>

      <div className="portfolio__content">
        <div className="portfolio__card-list">

          <PortfolioCard
            projectLink={"#"}
            src={firstPic}
            alt="test"
            description="Static Website"
          />

          <PortfolioCard
            projectLink={"#"}
            src={secondPic}
            alt="test"
            description="Responsive Website"
          />

          <PortfolioCard
            projectLink={"#"}
            src={thirdPic}
            alt="test"
            description="Single Page Application"
          />

          <PortfolioCard
            projectLink={"#"}
            src={forthPic}
            alt="test"
            description="Project 4"
          />

        </div>
      </div>
    </section>
  )
}

export default Portfolio;
