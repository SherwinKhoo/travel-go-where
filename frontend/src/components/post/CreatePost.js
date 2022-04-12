import React, { useState } from "react";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState("");

  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      title: title,
      content: content,
      categories: categories,
    }),
  };

  const newPost = async () => {
    const url = `http://127.0.0.1/topics/Singapore/0/newPost`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
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

  return (
    <div>
      <form onSubmit={newPost}>
        <label>Title:</label>
        <input placeholder="enter a post title" onChange={handleTitle} />
        <label>Content:</label>
        <input placeholder="input content here" onChange={handleContent} />
        <label>Categories:</label>
        <input placeholder="fill in categories" onChange={handleCategories} />

        <button>Submit</button>

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
