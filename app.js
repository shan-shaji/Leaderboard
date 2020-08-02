const express = require("express");
const bodyParser = require("body-parser");
const homePageRoutes = require("./routes/homePageRoutes.js");
const loginRoutes = require("./routes/login.js");
const ejs = require("ejs");

// Creating an instance
const app = express();

// Setting port
const PORT = process.env.PORT || 3000;

// Serving static files
app.use(express.static("public"));

// setting Templating Engine
app.set("view engine", "ejs");
// bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Grouping route handlers
app.use("/", homePageRoutes);
app.use("/login", loginRoutes);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
