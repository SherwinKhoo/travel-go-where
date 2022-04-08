const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = Schema({
  username: {
    type: String,
    required: [true, "Empty field not allowed"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Empty field not allowed"],
    min: [6, "password too short"],
  },
  // validate: {
  //   validator: /^[a-zA-Z0-9_]{3,16}$/,
  //   message:
  //     "Usernames must be 3 to 16 characters long and contain only alphanumeric characters and underscores (_).",
  // },
  // admin: { type: false, required: true },
  profilePic: { type: String },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
