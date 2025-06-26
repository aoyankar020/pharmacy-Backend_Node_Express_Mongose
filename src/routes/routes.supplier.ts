import express from "express";
import {
  createSupplier,
  deleteSupplier,
  getSupplier,
  updateSupplier,
} from "../controller/supplier/controller.supplier";

export const supplierRoutes = express.Router();
supplierRoutes.get("/suppliers", getSupplier);
supplierRoutes.post("/suppliers", createSupplier);
supplierRoutes.delete("/suppliers/:id", deleteSupplier);
supplierRoutes.patch("/suppliers/:id", updateSupplier);
