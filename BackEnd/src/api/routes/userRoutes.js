import express from "express";
import { login,  registrarUsuario } from "../controller/userController.js";
import validatorHandler from "../middleware/validatorHandler.js";
import {creteUsuario,loginUser} from "../schemas/userSchemas.js";


const router = express.Router();

router.post("/login", validatorHandler(loginUser, "body") ,login);
router.post("/register" ,validatorHandler(creteUsuario, "body"),registrarUsuario);



export default router;