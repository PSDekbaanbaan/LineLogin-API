const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.send(`I'm Ok.`);
});

router.get("/getname", function (req, res) {
  res.end(`My name is Local Nodejs`);
});

module.exports = router;
