import React from "react";

import singapore from "../images/singapore.jpeg";
import malaysia from "../images/malaysia.jpeg";
import brunei from "../images/flags/bn.png";

const LandingPageCards = () => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={singapore} className="landingPageCard1" alt="" />
          </div>
          <div className="flip-card-back">
            <h5 className="landingPageCardCountry">Singapore</h5>
            <h6 className="landingPageCardDescription">Uniquely Singapore</h6>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={malaysia} className="landingPageCard2" alt="" />
          </div>
          <div className="flip-card-back">
            <h5 className="landingPageCardCountry">Malaysia</h5>
            <h6 className="landingPageCardDescription">Truely Asia</h6>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={brunei} className="landingPageCard3" alt="" />
          </div>
          <div className="flip-card-back">
            <h5 className="landingPageCardCountry">Brunei</h5>
            <h6 className="landingPageCardDescription">
              The sultan is richer than you
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageCards;
