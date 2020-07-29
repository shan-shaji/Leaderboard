const express = require("express");
const router = express.Router();

// home Page route
router.get("/", (req, res) => {
  res.render("pages/home");
});

module.exports = router;
