import { Router } from "express";
const router = Router();
import productController from "../controllers/productController.js";

router.get("/products", productController.getAllProducts);

export default router;
