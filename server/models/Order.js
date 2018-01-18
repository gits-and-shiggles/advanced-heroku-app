import mongoose from "mongoose";

const schema = new mongoose.Schema({
  productsOrdered: {
    required: true,
    type: Array
  },
  customerName: {
    required: true,
    type: String
  },
  orderCompleted: {
    required: true,
    type: Boolean
  }
});

export default mongoose.model("OrdersModel", schema);
