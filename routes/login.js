const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.get("/", (req, res) => {
  res.render("pages/login");
});

router.post("/signin", (req, res) => {
  var name = req.body.name;
  var password = req.body.password;
  


});
module.exports = router;
