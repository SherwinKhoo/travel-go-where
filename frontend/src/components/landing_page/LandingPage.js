import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import LandingPageCards from "./LandingPageCards";
import landingPageBackgroundImage from "../images/background2.jpeg";

const LandingPage = () => {
  const [showCards, setShowCards] = useState(false);
  const [country, setCountry] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    searchBar();
  };

  const handleInputChange = (event) => {
    setCountry(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    showCards ? setShowCards(false) : setShowCards(true);
  };

  const searchBar = async () => {
    const url = `http://127.0.0.1:27017/topics/${country}`;
    console.log(country);
    console.log(url);
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    <NavLink to="/Singapore" />;
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
      <form onSubmit={handleSubmit}>
        <h1 className="landingPageTitle">TRAVEL GO WHERE</h1>
        <div className="row">
          <input
            type="text"
            className="landingPageSearch"
            placeholder="Freedom awaits..."
            onChange={handleInputChange}
          />
        </div>
        <h6 className="landingPageCannotDecide" onClick={handleClick}>
          Cannot decide?
        </h6>
        <div className="landingPageCards">
          {showCards ? <LandingPageCards /> : null}
        </div>
        {/* <NavLink to="/Singapore">
          <button>Enter Singapore</button>
        </NavLink> */}
      </form>
    </div>
  );
};

export default LandingPage;
