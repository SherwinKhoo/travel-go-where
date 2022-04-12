import React, { useState, useEffect, useContext } from "react";
// import IndividualPost0 from "./IndividualPost0";

import { useNavigate, NavLink, Link } from "react-router-dom";
import resultsContext0 from "../context/resultsContext0";
import resultsContext1 from "../context/resultsContext1";
import resultsContext2 from "../context/resultsContext2";

const MainThread = (props) => {
  const resultsCtx0 = useContext(resultsContext0);
  const resultsCtx1 = useContext(resultsContext1);
  const resultsCtx2 = useContext(resultsContext2);

  // const [searchCountry, setSearchCountry] = useState(props.searchCountry);

  const [postTitle0, setpostTitle0] = useState(["0"]);
  const [postTitle1, setpostTitle1] = useState(["1"]);
  const [postTitle2, setpostTitle2] = useState(["2"]);

  let navigate = useNavigate();

  // const handleSubmitToTopics = (event) => {
  //   props.setTopic(event.target.innerText);
  //   navigate(`/${props.searchCountry}/0/${event.target.innerHTML}`);
  // };

  console.log(props.topic);
  const enterTopics0 = async () => {
    const requestOptions = {
      method: "GET",
    };

    // const url = `http://127.0.0.1:5001/topics/topics/${props.searchCountry}/welcomecenter/${topic}`;
    const url = `http://127.0.0.1:5001/topics/Singapore/0`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    resultsCtx0.setResults0(data);
    const mapTitle = data.map((posts, index) => {
      return (
        <>
          <Link to={`/Singapore/0/${posts.title}/${index}`}>{posts.title}</Link>
          <br />
        </>
      );
    });

    console.log(data);
    // console.log(data[0].title);
    setpostTitle0(mapTitle);
  };

  const enterTopics1 = async () => {
    const requestOptions = {
      method: "GET",
    };

    // const url = `http://127.0.0.1:5001/topics/topics/${props.searchCountry}/welcomecenter/${topic}`;
    const url = `http://127.0.0.1:5001/topics/Singapore/1`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    resultsCtx1.setResults1(data);
    const mapTitle = data.map((posts, index) => {
      return (
        <>
          <Link to={`/Singapore/1/${posts.title}/${index}`}>{posts.title}</Link>
          <br />
        </>
      );
    });

    console.log(data);
    // console.log(data[0].title);
    setpostTitle1(mapTitle);
  };

  const enterTopics2 = async () => {
    const requestOptions = {
      method: "GET",
    };

    // const url = `http://127.0.0.1:5001/topics/topics/${props.searchCountry}/welcomecenter/${topic}`;
    const url = `http://127.0.0.1:5001/topics/Singapore/2`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    resultsCtx2.setResults2(data);
    const mapTitle = data.map((posts, index) => {
      return (
        <>
          <Link to={`/Singapore/2/${posts.title}/${index}`}>{posts.title}</Link>
          <br />
        </>
      );
    });

    console.log(data);
    // console.log(data[0].title);
    setpostTitle2(mapTitle);
  };

  useEffect(() => {
    enterTopics0();
    enterTopics1();
    enterTopics2();
    const controller = new AbortController();
    return () => {
      console.log("cleanup");
      controller.abort();
    };
  }, []);

  const handleAdd = (event) => {
    event.preventDefault();
    navigate("/Singapore/0/newPost");
  };

  return (
    <>
      <div className="container mainThread">
        <div className="row mainThreadHead">
          <h1 className="mainThreadTitle col-md-4">{props.searchCountry}</h1>
          <button
            onClick={handleAdd}
            className="col-md-4 btn mainThreadAdd"
          ></button>
          <input
            className="mainThreadSearchBar col-md-4"
            type="text"
            placeholder="Search for a topic"
          ></input>
        </div>
        <div className="mainThreadBody">
          <div className="mainThreadWelcome">
            <h5>Welcome Center</h5>
            {postTitle0}
          </div>
          <div className="mainThreadPopular">
            {/* <NavLink to={`/${props.searchCountry}/1`}> */}
            <h5>Popular Places to Go</h5>
            {postTitle1}
            {/* </NavLink> */}
          </div>
          <div className="mainThreadGeneral">
            {/* <NavLink to={`/${props.searchCountry}/2`}> */}
            <h5>General Discussions</h5>
            {postTitle2}
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainThread;

{
  /* <Link>
<IndividualPost
  title={posts.title}
  content={posts.content}
  createdAt={posts.createdAt}
  _id={posts._id}
  categories={posts.categories}
/>
</Link>
<button onClick={handleSubmitToTopics}>{posts.title}</button> */
}
