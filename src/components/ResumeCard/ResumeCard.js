import React from "react";

function ResumeCard(props) {
  return (
    <div className='resume-card'>

      <div className='resume-card__title'>
        <h5 className='resume-card__period'>{props.period}</h5>
        <span className='resume-card__place'>{props.place}</span>
      </div>

      <div>
        <h4 className='resume-card__speciality'>{props.speciality}</h4>
        <p className='resume-card__description'>{props.description}</p>
      </div>

    </div>
  )
}

export default ResumeCard;

