import express from "express";
import  {createBrand}  from "../controller/brandController.js";
import validatorHandler from "../middleware/validatorHandler.js";
import {creteProduct , idValidation} from "../schemas/productSchemas.js";

const router = express.Router();


router.post("/",createBrand);

export default router;
