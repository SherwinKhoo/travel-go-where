const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const connectDB = require("./db/db");
const users = require("./controller/users");
const port = process.env.PORT || 5001;

const app = express();

require("dotenv").config();

const storeSession = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000,
    store: storeSession,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB(process.env.MONGODB_URI);

app.use("/users", users);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
