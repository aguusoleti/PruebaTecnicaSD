import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image_url: { type: String },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand"
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
