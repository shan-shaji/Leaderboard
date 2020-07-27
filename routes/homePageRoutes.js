const express = require("express");
const router = express.Router();

// home Page route
router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
