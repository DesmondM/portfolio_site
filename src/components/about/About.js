import React from 'react'
import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src=""
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Why I want to be part of SovTech</h1>
        <p className="a-sub">
          SovTech has real industry experience in providing world class software solutions and I would like to be part of solutions to the industry's software solutions needs. I like solving problems through code, an area that is SovTech's speciality. The culture of continous learning and collaboration and world wide deployment of work is attractive for an software developer whether one is a beginner or an expert.

        </p>
        <p className="a-desc">
          The portfolio of your products from mobile and web apps, blockchain, enterprise applications, cloud and cyber security, are almost a garuantee that I would find immense interest in one of those domains.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Accolades alluded to SovTech</h4>
            <p className="a-award-desc">
              Prestigious ranking of top 50 software development companies. Most people incuding myself would love to be associated with such organisations .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;