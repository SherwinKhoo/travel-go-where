import React from "react";

import singapore from "../images/flags/sg.png";
import malaysia from "../images/flags/my.png";
import brunei from "../images/flags/bn.png";

const LandingPageCards = () => {
  return (
    <>
      <img src={singapore} className="landingPageCard1" />
      <img src={malaysia} className="landingPageCard2" />
      <img src={brunei} className="landingPageCard3" />
    </>
  );
};

export default LandingPageCards;
