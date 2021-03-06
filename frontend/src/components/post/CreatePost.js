import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import mainThreadBackgroundImage from "../images/hongkong.jpeg";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState("");
  let navigate = useNavigate();

  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      title: title,
      content: content,
      typeOfPost: 2,
      categories: categories,
      country: "Singapore",
      author: localStorage.getItem("currentUser"),
      username: localStorage.getItem("currentUser"),
    }),
  };

  const newPost = async () => {
    const url = `http://127.0.0.1:5001/topics/Singapore/0/newPost`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
  };

  const handleNewPost = (event) => {
    event.preventDefault();
    newPost();
    navigate("/Singapore");
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handleCategories = (event) => {
    setCategories(event.target.value);
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <img
        src={mainThreadBackgroundImage}
        className="mainThreadBackgroundImage"
        style={{
          position: "absolute",
          width: `100%`,
          height: `28%`,
          objectFit: "cover",
          zIndex: "-1",
        }}
      />
      <form className="container createPostContainer" onSubmit={handleNewPost}>
        <h1 className="createPostHeader">Create New Post</h1>
        <div className="row createPostInput">
          <label className="col-md-2 createPostTitle">Title:</label>
          <input
            className="col-md-10"
            placeholder="enter a post title"
            onChange={handleTitle}
          />
        </div>
        <div className="row createPostInput">
          <label className="col-md-2 createPostTitle">Content:</label>
          <textarea
            className="col-md-10"
            placeholder="input content here"
            onChange={handleContent}
          />
        </div>
        <div className="row createPostInput">
          <label className="col-md-2 createPostTitle">Categories:</label>
          <input
            className="col-md-10"
            placeholder="fill in categories"
            onChange={handleCategories}
          />
        </div>
        <div className="row createPostInput">
          <div className="col-md-2"></div>
          <button type="submit" className="btn col-md-1 createPostSubmit">
            Submit
          </button>
          <button
            type="button"
            onClick={handleBackClick}
            className="btn col-md-1 createPostBack"
          >
            Back
          </button>
          <div className="col-md-10"></div>
        </div>

        {/* <div className="container individualPostContainer">
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
        </div> */}
      </form>
    </div>
  );
};

export default CreatePost;

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

{
  /* <>
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
    </> */
}
