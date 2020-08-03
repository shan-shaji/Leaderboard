const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { check } = require("express-validator");

router.get("/", (req, res) => {
  res.render("pages/login");
});

router.post("/signup", [
  check("email", "please enter a valid email").isEmail(),
  check("password", "please enter a valid password").isLength({
    min: 6,
  }),
]);
module.exports = router;
