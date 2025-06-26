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
    res.status(500).send({
      status: false,
      message: "Product Fetching Failed",
      error: error,
    });
  }
};

export const createProduct = async function (req: Request, res: Response) {
  try {
    const bodyData = req.body;
    // const data=productModel.insertOne()
    const dbData = await productModel.create(bodyData);
    res.status(200).send({
      status: true,
      message: "Product Created Successfully",
      data: dbData,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Product Creation Failed",
      error: error,
    });
  }
};

export const deleteProduct = async function (req: Request, res: Response) {
  try {
    const pid = req.params.id;
    const dbData = await productModel.findByIdAndDelete(pid);
    res.status(200).send({
      status: true,
      message: "Product Deleted Successfully",
      data: dbData,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Product Deletion Failed",
      error: error,
    });
  }
};
export const updateProduct = async function (req: Request, res: Response) {
  try {
    const pid = req.params.id;
    const bodyData = req.body;
    const dbData = await productModel.findByIdAndUpdate(pid, bodyData, {
      new: true,
    });
    res.status(200).send({
      status: true,
      message: "Product Updated Successfully",
      data: dbData,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Product Updation Failed",
      error: error,
    });
  }
};
