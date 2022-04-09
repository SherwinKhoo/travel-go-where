import React from "react";

import singapore from "../images/singapore.jpeg";
import malaysia from "../images/malaysia.jpeg";
import brunei from "../images/flags/bn.png";

const LandingPageCards = () => {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={singapore} className="landingPageCard1" alt="" />
          </div>
          <div class="flip-card-back">
            <h5 className="landingPageCardCountry">Singapore</h5>
            <h6 className="landingPageCardDescription">Uniquely Singapore</h6>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={malaysia} className="landingPageCard2" alt="" />
          </div>
          <div class="flip-card-back">
            <h5 className="landingPageCardCountry">Malaysia</h5>
            <h6 className="landingPageCardDescription">Truely Asia</h6>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={brunei} className="landingPageCard3" alt="" />
          </div>
          <div class="flip-card-back">
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

/* from w3school
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
*/
