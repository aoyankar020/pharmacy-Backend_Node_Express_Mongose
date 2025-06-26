import mongoose from "mongoose";
import { ISupplier } from "../../interface/interface.supplier";

const supplierSchema = new mongoose.Schema<ISupplier>({
  Name: {
    type: String,
    min: [3, "Minimum 3 charectures are required "],
    required: [true, "Supplier's name is required. "],
  },
  Phone_Number: {
    type: Number,
    required: [true, "Phone number is required. "],
  },
  Email: {
    type: String,
    required: [true, "Email is required. "],
  },
  Company_Name: {
    type: String,
    min: [3, "Minimum 3 charectures are required"],
    required: [true, "Company name is required. "],
  },
  Opening_Balance: {
    type: Number,
    required: [true, "Opening  balance is required. "],
  },
  Image: { type: String, required: [true, "Image is required. "] },
  Address: {
    type: String,
    required: [true, "Address  is required. "],
  },
});

export const supplierModel = mongoose.model("suppliers", supplierSchema);
