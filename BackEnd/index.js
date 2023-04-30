import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import cors from "cors";
import conectarDB from "./src/database/db.js";
import products from "./src/api/routes/productRoutes.js"
import users from "./src/api/routes/userRoutes.js";
import brands from "./src/api/routes/brandRoutes.js"


const PORT = process.env.PORT || 5000;

(async () => {
  await conectarDB();
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("¡Hola, mundo!");
  });
  app.use("/api/products", products);
  app.use("/api/users", users);
  app.use("/api/brands", brands);


  app.listen(PORT, () => {
    console.log(`Servidor arrancado en el http://localhost:${PORT}`);
  });
})();
