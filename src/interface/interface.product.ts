import mongoose, { Date, mongo } from "mongoose";

export interface IProduct {
  product_Name: string;
  sell_price: number | 0;
  purchase_price: number | 0;
  expire_date: Date;
  alert_quentity: number | 0;
  product_opening_quentity: number | 0;
  product_image: string;
  supplierId: mongoose.ObjectId;
  generic_name: string;
}
