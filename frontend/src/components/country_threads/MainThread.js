import React, { useState } from "react";
import IndividualPost from "./IndividualPost";
import { useNavigate } from "react-router-dom";

const MainThread = (props) => {
  const [topic, setTopic] = useState("");

  let navigate = useNavigate();

  const enterTopics = async (topic) => {
    const requestOptions = {
      method: "GET",
    };

    const url = `http://127.0.0.1:5001/topics/${props.searchCountry}/${topic}`;
    const response = await fetch(url, requestOptions);
    const data = response.json();
    console.log(data);
  };

  const handleSubmitToTopics = (event) => {
    console.log(event.target.innerText);
    // props.setTopic(event.target.value);
    enterTopics(event.target.innerText);
  };

  return (
    <>
      <input type="text" placeholder="Search for a topic"></input>
      <div>
        <h2>Welcome Center</h2>
        <li onClick={handleSubmitToTopics}>
          <IndividualPost />
        </li>
      </div>
      <div>
        <h2>Popular Places to Go</h2>
      </div>
      <div>
        <h2>General Discussions</h2>
      </div>
    </>
  );
};

export default MainThread;
