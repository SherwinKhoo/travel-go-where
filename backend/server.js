const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const connectDB = require("./db/db");
const mongoose = require("mongoose");
const port = process.env.PORT || 5001;

const app = express();

require("dotenv").config();

const storeSession = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017/travelgowhere",
  collection: "sessions",
});

app.use(
  session({
    secret: "feedmeseymour",
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000,
    store: storeSession,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connectDB(process.env.MONGODB_URI);
mongoose.connect("mongodb://127.0.0.1:27017/travelgowhere");
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

const usersController = require("./controllers/usersController.js");
app.use("/users", usersController);
const sessionsController = require("./controllers/sessionsController.js");
app.use("/sessions", sessionsController);
const topicsController = require("./controllers/topicsController.js");
app.use("/topics", topicsController);

// seeding countries
// const Countries = require("./models/CountriesModel");
// Countries.create(
//   {
//     countryName: "Singapore",
//    thread: {["Sentosa", "Marina Bay Sands"]}
//   },
//   {
//     countryName: "Malaysia",
//   },
//   {
//     countryName: "Indonesia",
//   }
// );

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
