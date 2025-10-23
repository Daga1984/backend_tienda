import { Router } from "express";
import { getProducts, createProduct, deleteProduct, getProductById, updateProduct} from "../controllers/product.controller.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", createProduct);
router.get("/products/:id", getProductById);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
        