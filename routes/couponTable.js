const express = require("express");
const router = express.Router();

const couponTable = require("../models/couponTable");

router.post("/get", async (req, res) => {
  try {
    let [input, output] = await couponTable.get(req.body);
    console.log(input);
    res
      .status(200)
      .send({
        status: "success",
        result: output,
      })
      .end();
  } catch (error) {
    res
      .status(500)
      .send({
        status: "error",
        result: "error",
      })
      .end();
  }
});

module.exports = router;
