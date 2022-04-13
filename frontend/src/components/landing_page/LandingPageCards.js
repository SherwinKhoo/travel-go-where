import React from "react";

import singapore from "../images/singapore.jpeg";
import malaysia from "../images/malaysia.jpeg";
import brunei from "../images/brunei.webp";

const LandingPageCards = () => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={singapore} className="landingPageCard1Front" alt="" />
          </div>
          <div className="flip-card-back">
            <div className="landingPageBackContainer">
              <img src={singapore} className="landingPageCard1Back" alt="" />
            </div>
            <h5 className="landingPageCardCountry">Singapore</h5>
            <h6 className="landingPageCardDescription">Uniquely Singapore</h6>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={malaysia} className="landingPageCard2Front" alt="" />
          </div>
          <div className="flip-card-back">
            <div className="landingPageBackContainer">
              <img src={malaysia} className="landingPageCard1Back" alt="" />
            </div>
            <h5 className="landingPageCardCountry">Malaysia</h5>
            <h6 className="landingPageCardDescription">Truely Asia</h6>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={brunei} className="landingPageCard3Front" alt="" />
          </div>
          <div className="flip-card-back">
            <div className="landingPageBackContainer">
              <img src={brunei} className="landingPageCard1Back" alt="" />
            </div>
            <h5 className="landingPageCardCountry">Brunei</h5>
            <h6 className="landingPageCardDescription">Abode of Peace</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageCards;
