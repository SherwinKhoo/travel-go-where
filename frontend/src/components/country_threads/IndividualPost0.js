import React from "react";
import { useParams } from "react-router-dom";

const IndividualPost0 = (props) => {
  const params = useParams();
  console.log(props.value.results0[params.index]);
  const displayPost = props.value.results0[params.index];

  return (
    <>
      <h1>{displayPost.title}</h1>
      <p>{displayPost.content}</p>
    </>
  );
};

export default IndividualPost0;
