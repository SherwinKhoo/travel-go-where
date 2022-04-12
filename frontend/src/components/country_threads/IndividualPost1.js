import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const IndividualPost1 = (props) => {
  const [content, setContent] = useState("");
  const [edit, setEdit] = useState(false);

  const params = useParams();
  console.log(props.value.results1[params.index]);
  const displayPost = props.value.results1[params.index];
  console.log(displayPost);

  let navigate = useNavigate();

  const tags = displayPost.categories.map((list, index) => {
    return (
      <>
        <li className="individualPostTags">{list}</li>
      </>
    );
  });

  const editPost = async (id) => {
    const res = await fetch(
      `http://127.0.0.1:5001/topics/Singapore/0/${id}/edit`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content,
        }),
      }
    );
    if (res.status === 200) {
      console.log("post edited");
    }
  };

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

  const handleEditClick = (event) => {
    event.preventDefault();
    setEdit(true);
  };

  const handleDeleteClick = (event) => {
    deletePost(displayPost._id);
    navigate("/Singapore");
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    editPost(displayPost._id);
    navigate(`/Singapore`);
  };

  return (
    <>
      <div className="container individualPostContainer">
        <div className="individualPostHead">
          <h1>{displayPost.title}</h1>
        </div>
        {edit ? (
          <div className="individualPostForm">
            <h5 className="col-md-1 individualPostId">#{displayPost.postId}</h5>
            <input
              onChange={handleContentChange}
              defaultValue={displayPost.content}
            ></input>
            <ul>
              <li className="individualPostTags">edited</li>
              {tags}
            </ul>
            <div className="col-md-1"></div>
            <button
              type="submit"
              className="col-md-1 btn individualPostSubmit"
              value={displayPost._id}
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="individualPostPost">
            <h5 className="col-md-1 individualPostId">#{displayPost.postId}</h5>
            <h5>{displayPost.content}</h5>
            <ul>{tags}</ul>
            <button
              onClick={handleEditClick}
              onChange={handleContentChange}
              className="col-md-1 btn individualPostEdit"
            >
              Edit
            </button>
            <button
              className="col-md-1 btn individualPostDelete"
              // value={displayPost._id}
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default IndividualPost1;
