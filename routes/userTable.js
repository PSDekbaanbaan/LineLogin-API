const express = require("express");
const router = express.Router();

const userTable = require("../models/userTable");

router.post("/get", async (req, res) => {
  try {
    let [input, output] = await userTable.get(req.body);
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

router.post("/create", async (req, res) => {
  try {
    let [input, output] = await userTable.create(req.body);
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
