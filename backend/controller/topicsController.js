const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Topics = require("../model/TopicsModel");

//landing page
router.get("/", async (req, res) => {
  res.send("landing page");
});

// searching by country (singapore)
router.get("/:country", async (req, res) => {
  res.json(req.params.country);
});

// searching by post title in a country (sentosa)
router.get("/:country/:searchTopics", async (req, res) => {
  res.json(req.params.searchTopics);
});

// on clicking into one particular thread (aquarium)
router.get("/:country/:searchTopics/:searchThreads", async (req, res) => {
  res.json(req.params.searchThreads);
});

// creating new post in the country's thread (posting inside aquarium eg, aquarium hacks)
// singapore/sentosa/aquarium/newPost
router.post(
  "/:country/:searchTopics/:searchTreads/newPost",
  async (req, res) => {
    try {
      const newTopic = await Topics.create(req.body);
      console.log(newTopic);
      res.json(newTopic);
    } catch (error) {
      console.log(error);
      res.json("error");
    }
  }
);

// generating all posts in aquarium hacks
// singapore/sentosa/aquarium/aquarium-hacks
router.get(
  "/:country/:searchTopics/:searchTreads/:searchPost",
  async (req, res) => {
    res.json(req.params.searchPost);
  }
);

// posting something in aquarium hacks OR replying to a post in aquarium hacks
// singapore/sentosa/aquarium/aquarium-hacks/newPost
router.post(
  "/:country/:searchTopics/:searchTreads/:searchPost/newPost",
  async (req, res) => {
    try {
      const newPost = await Topics.create(req.body);
      console.log(newPost);
      res.json(newPost);
    } catch (error) {
      console.log(error);
      res.json("error");
    }
  }
);

// editing posts
// singapore/sentosa/aquarium/aquarium-hacks/edit
router.put(
  "/:country/:searchTopics/:searchTreads/:searchPost/edit",
  async (req, res) => {
    try {
      const updatePost = await Topics.updateOne(
        { _id: req.params.searchPost },
        {
          content: { type: String, required: [true, "cannot be blank"] },
        }
      );
      console.log(updatePost);
      res.end();
    } catch (error) {
      console.log(error);
      res.json("error");
    }
  }
);

// deleting inside aquarium-hacks
// singapore/sentosa/aquarium/aquarium-hacks/delete
router.delete(
  "/:country/:searchTopics/:searchTreads/:searchPost/delete",
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
