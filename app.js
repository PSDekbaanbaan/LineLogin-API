const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const indexRouter = require("./routes/index");
const userTableRouter = require("./routes/userTable");
const couponTableRouter = require("./routes/couponTable");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use("/", indexRouter);
app.use("/userTable", userTableRouter);
app.use("/couponTable", couponTableRouter);

app.use(async (req, res, next) => {
  console.log({
    path: req.path,
    query: req.query,
    headers: req.headers,
    body: req.body,
  });

  next();
});

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500);
  res.send({
    message: err.message,
    status: 500,
  });
});

const port = process.env.PORT | 8000;

app.listen(port, () => {
  console.log(`Start server at http://localhost:${port}`);
});
