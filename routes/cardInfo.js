const express = require("express");
const { postCardInfo } = require("../controllers/cardInfo");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Food Delivery App Card Server");
});

router.route("/").post(postCardInfo);

module.exports = router;
