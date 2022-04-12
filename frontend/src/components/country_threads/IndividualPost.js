import React from "react";
import { useParams } from "react-router-dom";

const IndividualPost = (props) => {
  const params = useParams();
  console.log(props.value.results[params.index]);
  const displayPost = props.value.results[params.index];

  return (
    <>
      <h1>{displayPost.title}</h1>
      <p>{displayPost.content}</p>
    </>
  );
};

export default IndividualPost;
