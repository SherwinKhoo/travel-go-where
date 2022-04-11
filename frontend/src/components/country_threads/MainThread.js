import React, { useState } from "react";

const MainThread = (props) => {
  const [topic, setTopic] = useState("");

  const enterTopics = async (topic) => {
    const requestOptions = {
      method: "GET",
    };

    const url = `http://127.0.0.1:5001/topics/${props.searchCountry}/${topic}`;
    const response = await fetch(url, requestOptions);
    const data = response.json();
    // console.log(data);
  };

  const handleSubmitToTopics = (event) => {
    setTopic(event.target.value);
    enterTopics(event.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Search for a topic"></input>
      <div>
        <h2>Welcome Center</h2>
        <li onClick={handleSubmitToTopics}>Rules</li>
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
