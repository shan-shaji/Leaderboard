const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/homePageRoutes.js");
const ejs = require("ejs");

// Creating an instance
const app = express();

// Serving static files
app.use(express.static("public"));

// setting Templating Engiine
app.set("view engine", "ejs");

// Grouping route handlers
app.use("/", routes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
