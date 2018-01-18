"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _ProductController = require("../controllers/ProductController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get("/products", _ProductController.list);
router.get("/products/:id", _ProductController.show);
router.post("/products", _ProductController.create);
router.delete("/products/:id", _ProductController.remove);
router.put("/products/:id", _ProductController.update);

exports.default = router;