const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicsSchema = Schema(
  {
    title: { type: String, required: [true, "cannot be blank"] },
    date: { type: Date },
    content: { type: String, required: [true, "cannot be blank"] },
    categories: [{ type: String }],
    postId: { type: Number, min: 1 },
  },
  { timestamps: true }
);

const Topics = mongoose.model("Topics", topicsSchema);

module.exports = Topics;
