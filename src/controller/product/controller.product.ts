import express, { Request, Response } from "express";
import { productModel } from "../../model/product/model.product";
const productRoute = express.Router();

export const getProducts = async function (req: Request, res: Response) {
  try {
    const dbData = await productModel.find();
    console.log(dbData);
    if (!dbData) {
      res.status(500).send({
        status: false,
        message: "Product Fetching Error",
        data: dbData,
      });
    }
    res.status(200).send({
      status: true,
      message: "Products Fetching Successfully",
      data: dbData,
    });
  } catch (error) {
    res
      .status(500)
      .send({ status: false, message: "Product Fetching Error", error: error });
  }
};

export const createProduct = async function (req: Request, res: Response) {
  const bodyData = req.body;
  // const data=productModel.insertOne()
  const dbData = await productModel.insertOne(bodyData);
  res
    .status(200)
    .send({
      status: true,
      message: "Product Create Successfully",
      data: dbData,
    });
};
