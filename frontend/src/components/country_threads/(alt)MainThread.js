import React, { useState, useEffect } from "react";
import IndividualPost from "./IndividualPost";
import { useNavigate } from "react-router-dom";

const MainThread = (props) => {
  const [topic, setTopic] = useState("");
  const [searchCountry, setSearchCountry] = useState(props.searchCountry);
  //   const [click, setClicked] = useState(false);
  const [postTitle, setpostTitle] = useState(["1"]);

  const [showPost, setShowPost] = useState(false);
  const [onePost, setOnePost] = useState("why is the state not updating?");

  let navigate = useNavigate();

  const handlePostTitleClick = (event) => {
    // setIndividualPostTitle(title.title);
    console.log(event.target.innerText);
    post(event.target.innerText);
  };

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
          <button onClick={handlePostTitleClick}>{title.title}</button>
        </>
      );
    });
    setpostTitle(mapTitle);
  };

  useEffect(() => {
    enterTopics();
  }, []);

  const post = async (title) => {
    const requestOptions = {
      method: "GET",
    };

    // const url = `http://127.0.0.1:5001/topics/topics/${props.searchCountry}/welcomecenter/${topic}`;
    console.log(title);
    const url = `http://127.0.0.1:5001/topics/Singapore/0/${title}`;
    console.log(url);
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    setOnePost(data[0]);
    console.log(onePost);
    console.log(data[0]);
  };

  const handleSubmitToTopics = (event) => {
    // console.log(event.target.innerText);
    // enterTopics();
    setTopic(event.target.innerText);
    // setClicked(true);
  };

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
