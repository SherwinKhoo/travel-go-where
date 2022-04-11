import React, { useState, useEffect } from "react";
import IndividualPost from "./IndividualPost";
import { useNavigate } from "react-router-dom";

const MainThread = (props) => {
  const [topic, setTopic] = useState("");
  const [searchCountry, setSearchCountry] = useState(props.searchCountry);
  const [click, setClicked] = useState(false);
  const [postTitle, setpostTitle] = useState(["1"]);

  let navigate = useNavigate();

  const enterTopics = async () => {
    const requestOptions = {
      method: "GET",
    };

    // const url = `http://127.0.0.1:5001/topics/topics/${props.searchCountry}/welcomecenter/${topic}`;
    const url = `http://127.0.0.1:5001/topics/Singapore/0`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    const mapTitle = data.map((title) => {
      return (
        <>
          <button>{title.title}</button>
        </>
      );
    });

    console.log(data);
    console.log(data[0].title);
    setpostTitle(mapTitle);
  };

  useEffect(() => {
    enterTopics();
  }, []);

  const handleSubmitToTopics = (event) => {
    // console.log(event.target.innerText);
    enterTopics();
    setTopic(event.target.innerText);
    setClicked(true);
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
            {/* <li onClick={handleSubmitToTopics}>
              Rules
              <IndividualPost searchCountry={searchCountry} topic={topic} />
            </li> */}
            {/* {click ? (
              <IndividualPost searchCountry={searchCountry} topic={topic} />
            ) : (
              <li onClick={handleSubmitToTopics}>{hello[0]}</li>
            )} */}
            {/* {postTitle !== ["1"] ? (
              <button onClick={handleSubmitToTopics}>{postTitle}</button>
            ) : null} */}
            {postTitle}
            <IndividualPost />
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
