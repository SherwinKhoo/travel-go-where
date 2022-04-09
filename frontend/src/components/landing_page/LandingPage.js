import React, { useState } from "react";

import LandingPageCards from "./LandingPageCards";

import landingPageBackgroundImage from "../images/background2.jpeg";

const LandingPage = () => {
  const [showCards, setShowCards] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    showCards ? setShowCards(false) : setShowCards(true);
  };

  return (
    <div className="landingPage">
      <img
        src={landingPageBackgroundImage}
        className="landingPageBackgroundImage"
        // style={{
        //   position: "absolute",
        //   width: `100%`,
        //   height: `100%`,
        //   objectFit: "cover",
        // }}
      />
      <form>
        <h1 className="landingPageTitle">TRAVEL GO WHERE</h1>
        <div className="row">
          <input
            type="text"
            className="landingPageSearch"
            placeholder="Freedom awaits..."
          />
        </div>
        <h6 className="landingPageCannotDecide" onClick={handleClick}>
          Cannot decide?
        </h6>
        <div className="landingPageCards">
          {showCards ? <LandingPageCards /> : null}
        </div>
      </form>
    </div>
  );
};

export default LandingPage;
