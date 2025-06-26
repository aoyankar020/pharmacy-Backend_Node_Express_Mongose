import mongoose, { Types } from "mongoose";
import { IProduct } from "../../interface/interface.product";

const productSchema = new mongoose.Schema<IProduct>({
  product_Name: {
    type: String,
    min: [3, "Minimum 3 charectures are required "],
    required: [true, "Product name is required. "],
  },
  sell_price: { type: Number, required: [true, "Selling Price is required. "] },
  purchase_price: {
    type: Number,
    required: [true, "Purchase Price is required. "],
  },
  alert_quentity: {
    type: Number,
    min: [10, "Set minimum 10 product quantity"],
    required: [true, "Product alert quantity is required. "],
  },
  product_opening_quentity: {
    type: Number,
    required: [true, "Opening  quantity is required. "],
  },
  expire_date: { type: Date, required: [true, "Expire Date is required. "] },
  product_image: {
    type: String,
    required: [true, "Product image  is required. "],
  },
  generic_name: {
    type: String,
    required: [true, "generic_name  is required. "],
  },
  supplierId: { type: Types.ObjectId, required: true },
});

export const productModel = mongoose.model<IProduct>("products", productSchema);
