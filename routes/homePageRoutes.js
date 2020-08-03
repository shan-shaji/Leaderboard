const express = require("express");
const router = express.Router();
const axios = require("axios");
const { response } = require("express");

const leaderBoardUrl = "https://bridge.buddyweb.fr/api/leaderboard/leaderboard";
let datafetched = false;
var result;

// home Page route
router.get("/", (req, res) => {
  if (datafetched == true) {
    res.render("pages/home", { rankingResult: result });
  }

  axios.get(leaderBoardUrl).then(
    (response) => {
      result = response.data;
      datafetched = true;
      res.redirect("/");
    },
    (error) => {
      console.log(error);
    }
  );
});

module.exports = router;
