import React from "react";

function PortfolioCard(props) {
  return (
    <div className="portfolio__card" data-aos="zoom-in-up">
      <a href={props.projectLink} className="portfolio__card-link" target="_blank" rel="noreferrer">
        <img src={props.src} alt={props.alt} className="portfolio__card-picture"/>
        <div className="portfolio__overlay">
          <div className="portfolio__card-overlay-text">{props.description}</div>
        </div>
      </a>
    </div>
  )
}

export default PortfolioCard;
