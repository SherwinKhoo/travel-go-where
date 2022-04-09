const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const usersSchema = Schema({
//   username: {
//     type: String,
//     required: true,
//     // unique: [true, "Username is taken"],
//   },
//   password: {
//     type: String,
//     required: [true, "Empty field not allowed"],
//     min: [6, "password too short"],
//     // validate: {
//     //   validator: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/,
//     // },
//   },
//   // validate: {
//   //   validator: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/,
//   //   message:
//   //     "Usernames must be 3 to 16 characters long and contain only alphanumeric characters and underscores (_).",
//   // },
//   // admin: { type: false, required: true },
//   // profilePic: { type: String },
//   // topics: {
//   //   type: Schema.Types.ObjectId,
//   //   ref: "topics",
//   // },
// });

const usersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
