import React from "react";
import { useParams } from "react-router-dom";

const IndividualPost0 = (props) => {
  const params = useParams();
  console.log(props.value.results0[params.index]);
  const displayPost = props.value.results0[params.index];

  const tags = displayPost.categories.map((list, index) => {
    return (
      <>
        <li className="individualPostTags">{list}</li>
      </>
    );
  });
  return (
    <>
      <div className="container individualPostContainer">
        <h5 className="individualPostId">#{displayPost.postId}</h5>
        <h1>{displayPost.title}</h1>
        <h5>{displayPost.content}</h5>
        <ul>{tags}</ul>
      </div>
    </>
  );
};

export default IndividualPost0;
