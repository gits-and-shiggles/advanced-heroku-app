"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = list;
exports.show = show;
exports.create = create;
exports.remove = remove;
exports.update = update;

var _Order = require("../models/Order");

var _Order2 = _interopRequireDefault(_Order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(req, res) {
  _Order2.default.find([]).exec().then(function (orders) {
    return res.json(orders);
  });
}

function show(req, res) {
  _Order2.default.findById(req.params.id).exec().then(function (order) {
    return res.json(order);
  });
}

function create(req, res) {
  var newOrder = new _Order2.default({
    productsOrdered: req.body.productsOrdered,
    customerName: req.body.customerName
    // in future development, customerName will become an object of customer information. name, account number, billing info...
  });
  newOrder.save().then(function (order) {
    return res.json(order);
  });
}

function remove(req, res) {
  _Order2.default.findByIdAndRemove(req.params.id).exec().then(function (orders) {
    return res.json(orders);
  });
}

function update(req, res) {
  _Order2.default.findByIdAndUpdate(req.params.id).exec().then(function (order) {
    order.productsOrdered = req.body.productsOrdered || order.productsOrdered;
    order.customerName = req.body.customerName || order.customerName;
    return order.save();
  }).then(function (order) {
    return res.json(order);
  });
}