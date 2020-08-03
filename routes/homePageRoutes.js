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
    res.render("pages/home", { rankingResult: result, result1: result1, result2: result2, result3: result3 });
  }

  axios.get(leaderBoardUrl).then(
    (response) => {
      result1 = response.data[0];
      result2 = response.data[1];
      result3 = response.data[2];
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
