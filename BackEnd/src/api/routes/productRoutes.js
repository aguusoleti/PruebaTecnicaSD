import express from "express";
import  { createProducts, editProduct, deleteProduct, getProducts,getProduct}  from "../controller/productController.js";
import validatorHandler from "../middleware/validatorHandler.js";
import {creteProduct , idValidation} from "../schemas/productSchemas.js";

const router = express.Router();


router.post("/",validatorHandler(creteProduct,"body") ,createProducts);
router.get("/", getProducts);
router.get("/:id", validatorHandler(idValidation,"params"),getProduct);
router.put("/edit/:id",validatorHandler(idValidation,"params"), editProduct);
router.delete("/:id", validatorHandler(idValidation,"params"), deleteProduct);
export default router;
