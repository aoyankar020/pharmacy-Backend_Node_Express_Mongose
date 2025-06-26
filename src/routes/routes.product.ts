import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controller/product/controller.product";

export const productRoutes = express.Router();

productRoutes.get("/products", getProducts);
productRoutes.post("/products", createProduct);
productRoutes.delete("/products/:id", deleteProduct);
productRoutes.patch("/products/:id", updateProduct);
