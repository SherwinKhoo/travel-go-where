const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Topics = require("../models/TopicsModel");

//landing page
router.get("/", async (req, res) => {
  res.send("landing page");
});

// searching by country (singapore)
router.get("/:country", async (req, res) => {
  console.log(req.params.country);
  res.json(req.params.country);
});

// searching by post title in a country (sentosa)
// router.get("/:country/:searchTopics", async (req, res) => {
//   res.json(req.params.searchTopics);
// });

// singapore/0/
router.get("/:country/:searchTopics", async (req, res) => {
  try {
    const findPost = await Topics.find({
      $and: [
        {
          country: req.params.country,
        },
        { typeOfPost: req.params.searchThreads },
      ],
    });
    res.json(findPost);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});
// singapore/0/title_of_post
router.get("/:country/:searchTopics/:searchThreads", async (req, res) => {
  try {
    const findPost = await Topics.find({
      $and: [
        {
          country: req.params.country,
        },
        { typeOfPost: req.params.searchTopics },
        { title: req.params.searchThreads },
      ],
    });
    res.json(findPost);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

// creating new post in the country's thread (posting inside aquarium eg, aquarium hacks)
// singapore/sentosa/aquarium/newPost
router.post("/:country/:searchTreads/newPost", async (req, res) => {
  try {
    const newTopic = await Topics.create(req.body);
    console.log(newTopic);
    res.json(newTopic);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

// generating all posts in aquarium hacks
// singapore/sentosa/aquarium/aquarium-hacks
router.get("/:country/:searchTreads/:searchPost", async (req, res) => {
  try {
    const findPosts = await Topics.find({
      categories: req.params.searchPost,
    });
    res.json(findPosts);
  } catch (error) {
    console.log(error);
  }
});

// posting something in aquarium hacks OR replying to a post in aquarium hacks
// singapore/sentosa/aquarium/aquarium-hacks/newPost
router.post("/:country/:searchTreads/:searchPost/newPost", async (req, res) => {
  try {
    const newPost = await Topics.create(req.body);
    console.log(newPost);
    res.json(newPost);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

// editing posts
// singapore/sentosa/aquarium/aquarium-hacks/edit
router.put("/:country/:searchTreads/:searchPost/edit", async (req, res) => {
  const findPost = await Topics.updateOne(
    {
      _id: req.params.searchPost,
    },
    {
      title: req.body.title,
      content: req.body.content,
    }
  );
  console.log(findPost);
  console.log(req.params.searchPost);
  res.json(findPost);
});

// deleting inside aquarium-hacks
// singapore/sentosa/aquarium/aquarium-hacks/delete
router.delete(
  "/:country/:searchTreads/:searchPost/delete",
  async (req, res) => {
    try {
      const deletePost = await Topics.deleteOne({ _id: req.params.searchPost });
      res.send(deletePost);
    } catch (error) {
      console.log(error);
      res.json("error");
    }
  }
);

module.exports = router;
