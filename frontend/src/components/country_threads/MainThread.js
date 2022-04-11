import React, { useState } from "react";
import IndividualPost from "./IndividualPost";
import { useNavigate } from "react-router-dom";

const MainThread = (props) => {
  const [topic, setTopic] = useState("");
  const [searchCountry, setSearchCountry] = useState(props.searchCountry);

  let navigate = useNavigate();

  const enterTopics = async (topic) => {
    const requestOptions = {
      method: "GET",
    };

    const url = `http://127.0.0.1:5001/topics/${props.searchCountry}/0/${topic}`;
    const response = await fetch(url, requestOptions);
    const data = response.json();
    console.log(data);
  };

  const handleSubmitToTopics = (event) => {
    console.log(event.target.innerText);
    // props.setTopic(event.target.value);
    enterTopics(event.target.innerText);
    setTopic(event.target.innerText);
  };

  // map through

  return (
    <>
      <div className="container mainThread">
        <div className="row mainThreadHead">
          <h1 className="mainThreadTitle col-md-4">{props.searchCountry}</h1>
          <div className="col-md-4"></div>
          <input
            className="mainThreadSearchBar col-md-4"
            type="text"
            placeholder="Search for a topic"
          ></input>
        </div>
        <div className="mainThreadBody">
          <div className="mainThreadWelcome">
            <h5>Welcome Center</h5>
            <li onClick={handleSubmitToTopics}>
              <IndividualPost searchCountry={searchCountry} topic={topic} />
            </li>
          </div>
          <div className="mainThreadPopular">
            <h5>Popular Places to Go</h5>
          </div>
          <div className="mainThreadGeneral">
            <h5>General Discussions</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainThread;
