import Product from "../models/products.js"

export const findElement = async (element) => {
  return Product.find(element);
};