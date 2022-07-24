const constant = {};

constant.configServer = {
  server: "",
  database: "",
  port: 1433,
  dialect: "mssql",
  options: {
    keepAlive: true,
    encrypt: false,
  },
  authentication: {
    type: "default",
    options: { userName: "", password: "" },
  },
};

module.exports = constant;
