import ProductModel from "../models/Product";

export function list(req,res) {
  ProductModel.find([]).exec()
  .then(products => {
    console.log(products)
    return res.json(products);
  })
};

export function show(req,res){
  ProductModel.findById(req.params.id).exec()
  .then(product => {
    return res.json(product);
  });
}

export function create(req, res){
  const newProduct = new ProductModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantityAvailable: req.body.quantityAvailable
  });
  console.log(newProduct);
  newProduct.save()
  .then(product => {
    return res.json(product);
  });
}

export function update(req, res){
  ProductModel.findById(req.params.id).exec()
  .then(product => {
    console.log(req.body);
    console.log(product);
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.quantityAvailable = req.body.quantityAvailable || product.quantityAvailable;
    console.log(product);
    return product.save();
  })
  .then(product => {
    return res.json(product);
  });
}

export function remove(req,res) {
  ProductModel.findByIdAndRemove(req.params.id).exec()
  .then(product => {
    return res.json(product);
  });
}
