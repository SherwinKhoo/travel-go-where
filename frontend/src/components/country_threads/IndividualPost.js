import React, { useState } from "react";

const IndividualPost = (props) => {
  const [onePost, setOnePost] = useState("1");

  const post = async () => {
    const requestOptions = {
      method: "GET",
    };

    const url = `http://127.0.0.1:5001/topics/topics/${props.searchCountry}/0/title-one/`;
    const response = await fetch(url, requestOptions);
    const data = response.json();

    setOnePost(data);
    console.log(data);
    console.log(onePost);
  };

  return (
    <>
      {onePost !== "1" ? (
        <div className="container">
          <h5>#{onePost.postId}</h5>
          <h2>{onePost.title}</h2>
          <h5>{onePost.date}</h5>
          <h5>{onePost.content}</h5>
        </div>
      ) : null}
    </>
  );
};

export default IndividualPost;
