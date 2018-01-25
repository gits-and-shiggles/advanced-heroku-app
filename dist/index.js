"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _OrderRoutes = require("./routes/OrderRoutes");

var _OrderRoutes2 = _interopRequireDefault(_OrderRoutes);

var _ProductRoutes = require("./routes/ProductRoutes");

var _ProductRoutes2 = _interopRequireDefault(_ProductRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();


_mongoose2.default.set("debug", true);
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect("mongodb://rhodestraveler:rhodestraveler@ds143907.mlab.com:43907/aca-final-project");

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use(_express2.default.static("public"));
app.use(_OrderRoutes2.default);
app.use(_ProductRoutes2.default);

app.get("*", (req, res, next) => {
  res.sendFile("public/index.html");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Listening on port:" + port);
});
