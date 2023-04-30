import express from "express";
import  { createProducts, editProduct, deleteProduct, getProducts}  from "../controller/productController.js";
import validatorHandler from "../middleware/validatorHandler.js";
import {creteProduct , idValidation} from "../schemas/productSchemas.js";

const router = express.Router();


router.post("/",validatorHandler(creteProduct,"body") ,createProducts);
router.get("/", getProducts);
router.put("/edit/:id",validatorHandler(idValidation,"params"), editProduct);
router.delete("/:id", validatorHandler(idValidation,"params"), deleteProduct);
export default router;
