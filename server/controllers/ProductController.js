import ProductModel from "../models/Product";

export function list(req,res) {
  ProductModel.find([]).exec()
  .then(products => {
    return res.json(products);
  })
};

export function show(req,res){
  ProductModel.findById(req.params.id).exec()
  .then(product => {
    return response.json(product);
  });
}

export function create(req,res){
  const newProduct = new ProductModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantityAvailable: req.body.quantityAvailable
  });
  newProduct.save()
  .then(product => {
    return res.json(product);
  });
}

export function update(req,res){
  ProductModel.findByIdAndUpdate(req.params.id).exec()
  .then(product => {
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.quantityAvailable = req.body.quantityAvailable || product.quantityAvailable;
  })
}

export function remove(req,res) {
  ProductModel.findByIdAndRemove(req.params.id).exec()
  .then(product => {
    return res.json(product);
  });
}
