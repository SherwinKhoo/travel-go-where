import React from "react";
import { useParams } from "react-router-dom";

const IndividualPost2 = (props) => {
  const params = useParams();
  console.log(props.value.results2[params.index]);
  const displayPost = props.value.results2[params.index];

  return (
    <>
      <h1>{displayPost.title}</h1>
      <p>{displayPost.content}</p>
    </>
  );
};

export default IndividualPost2;
