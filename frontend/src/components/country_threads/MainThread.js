import React, { useState, useEffect, useContext } from "react";
import IndividualPost from "./IndividualPost";

import { useNavigate, NavLink, Link } from "react-router-dom";
import resultsContext from "../context/resultsContext";

const MainThread = (props) => {
  const resultsCtx = useContext(resultsContext);

  const [searchCountry, setSearchCountry] = useState(props.searchCountry);

  const [postTitle, setpostTitle] = useState(["1"]);

  let navigate = useNavigate();

  const handleSubmitToTopics = (event) => {
    props.setTopic(event.target.innerText);
    navigate(`/${props.searchCountry}/0/${event.target.innerHTML}`);
  };

  console.log(props.topic);
  const enterTopics = async () => {
    const requestOptions = {
      method: "GET",
    };

    // const url = `http://127.0.0.1:5001/topics/topics/${props.searchCountry}/welcomecenter/${topic}`;
    const url = `http://127.0.0.1:5001/topics/Singapore/0`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    resultsCtx.setResults(data);
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
    setpostTitle(mapTitle);
  };

  useEffect(() => {
    enterTopics();
    const controller = new AbortController();
    return () => {
      console.log("cleanup");
      controller.abort();
    };
  }, []);

  console.log(postTitle);
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
            {postTitle}
          </div>
          <div className="mainThreadPopular">
            <NavLink to={`/${props.searchCountry}/1`}>
              <h5>Popular Places to Go</h5>
            </NavLink>
          </div>
          <div className="mainThreadGeneral">
            <NavLink to={`/${props.searchCountry}/2`}>
              <h5>General Discussions</h5>
            </NavLink>
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
