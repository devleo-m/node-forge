import { Router } from "express";
import { ProductController } from "../controller/productController";

const router = Router();

router.get("/products", ProductController.getAllProducts);
router.get("/products/:id", ProductController.getProductById);
router.post("/products", ProductController.createProduct);

export default router;