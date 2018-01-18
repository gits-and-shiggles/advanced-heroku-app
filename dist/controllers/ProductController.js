"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = list;
exports.show = show;
exports.create = create;
exports.update = update;
exports.remove = remove;

var _Product = require("../models/Product");

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(req, res) {
  _Product2.default.find([]).exec().then(function (products) {
    return res.json(products);
  });
};

function show(req, res) {
  _Product2.default.findById(req.params.id).exec().then(function (product) {
    return response.json(product);
  });
}

function create(req, res) {
  var newProduct = new _Product2.default({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantityAvailable: req.body.quantityAvailable
  });
  newProduct.save().then(function (product) {
    return res.json(product);
  });
}

function update(req, res) {
  _Product2.default.findByIdAndUpdate(req.params.id).exec().then(function (product) {
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.quantityAvailable = req.body.quantityAvailable || product.quantityAvailable;
  });
}

function remove(req, res) {
  _Product2.default.findByIdAndRemove(req.params.id).exec().then(function (product) {
    return res.json(product);
  });
}