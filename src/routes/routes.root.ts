import express, { Request, Response } from "express";
import { supplierRoutes } from "./routes.supplier";
import { productRoutes } from "./routes.product";
export const rootRoute = express.Router();

rootRoute.use("/pharmacy", supplierRoutes);
rootRoute.use("/pharmacy", productRoutes);
