const express = require("express");

const homePageRoutes = require("./routes/homePageRoutes.js");

const ejs = require("ejs");

// initiate mongo server
InitiateMongoServer();

// Creating an instance
const app = express();

// Setting port
const PORT = process.env.PORT || 4000;

// Serving static files
app.use(express.static("public"));

// setting Templating Engine
app.set("view engine", "ejs");

// Grouping route handlers
app.use("/", homePageRoutes);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
