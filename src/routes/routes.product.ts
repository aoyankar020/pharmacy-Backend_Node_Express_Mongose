import express from "express";
import {
  createProduct,
  getProducts,
} from "../controller/product/controller.product";

export const productRoute = express.Router();

productRoute.get("/products", getProducts);
productRoute.post("/products", createProduct);
