import { Router } from "express";
import { getProducts, getProductById, createProduct, deleteProduct } from "../controllers/products.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/create", authMiddleware, createProduct);
router.delete("/:id", authMiddleware, deleteProduct);

export default router;