import { Request, Response } from "express";
import { supplierModel } from "../../model/supplier/model.supplier";

export const createSupplier = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log("Body", body);
    const dbData = await supplierModel.create(body);
    res.status(200).send({
      status: true,
      message: "Supplier Created Successfully",
      data: dbData,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Supplier Creation Failed",
      error: error,
    });
  }
};
export const getSupplier = async (req: Request, res: Response) => {
  try {
    const dbData = await supplierModel.find();
    res.status(200).send({
      status: true,
      message: "Supplier Fetched Successfully",
      data: dbData,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Supplier Fetching Failed",
      error: error,
    });
  }
};
export const deleteSupplier = async (req: Request, res: Response) => {
  try {
    const sid = req.params.id;
    const dbData = await supplierModel.findByIdAndDelete(sid);
    res.status(200).send({
      status: true,
      message: "Supplier Deleted Successfully",
      data: dbData,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Supplier Deletion Failed",
      error: error,
    });
  }
};
export const updateSupplier = async (req: Request, res: Response) => {
  try {
    const sid = req.params.id;
    const body = req.body;
    const dbData = await supplierModel.findByIdAndUpdate(sid, body, {
      new: true,
    });
    res.status(200).send({
      status: true,
      message: "Supplier Updated Successfully",
      data: dbData,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Supplier Updation Failed",
      error: error,
    });
  }
};
