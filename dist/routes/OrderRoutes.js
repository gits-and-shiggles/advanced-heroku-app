"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _OrderController = require("../controllers/OrderController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get("/orders", _OrderController.list);
router.get("/orders/:id", _OrderController.show);
router.post("/orders", _OrderController.create);
router.delete("/orders/:id", _OrderController.remove);
router.put("/orders/:id", _OrderController.update);

exports.default = router;