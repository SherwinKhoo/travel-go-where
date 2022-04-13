import React from "react";
import { useNavigate } from "react-router-dom";

import singapore from "../images/singapore.jpeg";
import malaysia from "../images/malaysia.jpeg";
import brunei from "../images/brunei.webp";

const LandingPageCards = (props) => {
  let navigate = useNavigate();

  const flipcard = async (ctry) => {
    const url = `http://127.0.0.1:27017/topics/${ctry}`;
    const response = await fetch(url, {
      method: "GET",
      mode: "no-cors",
    });
    console.log(response);
    navigate(`/${ctry}`);
  };

  const handleClick = (event) => {
    props.setSearchCountry(event.target.innerText);
    flipcard(event.target.innerText);
    // navigate(`/${event.target.innerText}`);
  };

  return (
    <>
      <div className="flip-card" style={{ cursor: "pointer" }}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={singapore} className="landingPageCard1Front" alt="" />
          </div>
          <div className="flip-card-back">
            <div className="landingPageBackContainer">
              <img
                type="submit"
                src={singapore}
                className="landingPageCard1Back"
                alt=""
              />
            </div>
            <h5 className="landingPageCardCountry" onClick={handleClick}>
              Singapore
            </h5>
            <h6 className="landingPageCardDescription">Uniquely Singapore</h6>
          </div>
        </div>
      </div>
      <div className="flip-card" style={{ cursor: "pointer" }}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={malaysia} className="landingPageCard2Front" alt="" />
          </div>
          <div className="flip-card-back">
            <div className="landingPageBackContainer">
              <img src={malaysia} className="landingPageCard1Back" alt="" />
            </div>
            <h5 className="landingPageCardCountry">Malaysia</h5>
            <h6 className="landingPageCardDescription">Truly Asia</h6>
          </div>
        </div>
      </div>
      <div className="flip-card" style={{ cursor: "pointer" }}>
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
