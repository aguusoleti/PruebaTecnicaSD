import Product from "../models/products.js";
import { findElement } from "../utils/productUtils.js";

const createProducts = async (req, res) => {
  try {
    const product = new Product(req.body);
    const productSave = await product.save();
    res.json(productSave);
  } catch (error) {
    console.log(error);
  }
};
const editProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const userProduct = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(userProduct);
  } catch (error) {
    console.log(error);
    res.status(404).json({message:"Product not found"});

  }
};
const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ _id: id })
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(404).json({message:"Product not found"});
  }
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Product.deleteOne({ _id: id });
    if (data) {
        res.status(200).json({ message: "Producto eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Producto no encontrado" });
      }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getProducts = async (req, res) => {
  const query = req.query;
  const product = await findElement(query);
  try {
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({});

  }
};


export { createProducts, editProduct, deleteProduct, getProducts,getProduct};