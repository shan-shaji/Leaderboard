require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const { response } = require("express");

const leaderBoardUrl = `https://bridge.buddyweb.fr/api/leaderboard/${process.env.API_NAME}`;

var result = null;

// home Page route
router.get("/", (req, res) => {
  axios
    .get(leaderBoardUrl)
    .then((response) => {
      result = response.data;
      res.render("pages/home", { rankingResult: result });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
