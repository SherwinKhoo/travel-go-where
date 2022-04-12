import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const IndividualPost2 = (props) => {
  const params = useParams();
  console.log(props.value.results2[params.index]);
  const displayPost = props.value.results2[params.index];
  console.log(displayPost);

  let nagivate = useNavigate();

  const tags = displayPost.categories.map((list, index) => {
    return (
      <>
        <li className="individualPostTags">{list}</li>
      </>
    );
  });

  const deletePost = async (id) => {
    const res = await fetch(
      `http://127.0.0.1:5001/topics/Singapore/0/${id}/delete`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      console.log("post deleted");
    }
  };

  const handleDelete = (event) => {
    deletePost(displayPost._id);
    nagivate("/Singapore");
  };

  return (
    <>
      <div className="container individualPostContainer">
        <h5 className="col-md-1 individualPostId">#{displayPost.postId}</h5>
        <h1>{displayPost.title}</h1>
        <h5>{displayPost.content}</h5>
        <ul>{tags}</ul>
        <button className="col-md-1 btn individualPostEdit">Edit</button>
        <button
          className="col-md-1 btn individualPostDelete"
          // value={displayPost._id}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default IndividualPost2;
