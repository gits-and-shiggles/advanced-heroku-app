import OrderModel from "../models/Order";

export function list(req,res){
  OrderModel.find([]).exec()
  .then(orders => {
    return res.json(orders);
  });
}

export function show(req,res){
  OrderModel.findById(req.params.id).exec()
  .then(order => {
    return res.json(order);
  });
}

export function create(req,res) {
  const newOrder = new OrderModel({
    productsOrdered: req.body.productsOrdered,
    customerName: req.body.customerName
    // in future development, customerName will become an object of customer information. name, account number, billing info...
  });
  newOrder.save()
  .then(order => {
    return res.json(order);
  });
}

export function remove(req,res) {
  OrderModel.findByIdAndRemove(req.params.id).exec()
  .then(orders => {
    return res.json(orders);
  });
}

export function update(req,res){
  OrderModel.findByIdAndUpdate(req.params.id).exec()
  .then(order =>{
    order.productsOrdered = req.body.productsOrdered || order.productsOrdered;
    order.customerName = req.body.customerName || order.customerName;
    return order.save();
  })
  .then(order =>{
    return res.json(order);
  });
}
