import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  quantityAvailable: {
    required: true,
    type: Number
  }
});

export default mongoose.model("ProductModel", schema);
