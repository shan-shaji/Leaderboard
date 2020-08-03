require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const { response } = require("express");

const leaderBoardUrl = `https://bridge.buddyweb.fr/api/leaderboard/${process.env.API_NAME}`;
let datafetched = false;
var result = null;

// home Page route
router.get("/", (req, res) => {
  axios
    .get(leaderBoardUrl)
    .then((response) => {
      result = response.data;
      datafetched = true;
      res.render("pages/home", { rankingResult: null });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
