import React from "react";
import { useParams } from "react-router-dom";

const IndividualPost1 = (props) => {
  const params = useParams();
  console.log(props.value.results1[params.index]);
  const displayPost = props.value.results1[params.index];

  return (
    <>
      <h1>{displayPost.title}</h1>
      <p>{displayPost.content}</p>
    </>
  );
};

export default IndividualPost1;
