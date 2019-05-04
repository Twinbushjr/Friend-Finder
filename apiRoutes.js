var express = require("express");
var path = require("path");
const friendData = require("../data/friends.js");

const router = express.Router();

router.get("/api/friends", function(req, res){
  console.log(friendData);
  res.json(friendData);
});

router.post("/api/friends", function (req, res) {
  console.log(req.body);
  let userScore = req.body.scores;
  const scoresArr = [];
  let bestMatch = 0;
 
  for (var i = 0; i < friendData.length; i++) {
    var scoreDiff = 0;
 
    for (var j = 0; j < userScore.length; j++) {
      scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScore[j])))
    }
    scoresArr.push(scoreDiff);
  }
  for (var i = 0; i < scoresArr.length; i++) {
    if (scoresArr[i] <= scoresArr[bestMatch]) {
      bestMatch = i;
    }
  }

  let bestFriend = friendData[bestMatch];
  res.json(bestFriend);
});

module.exports = router;