import mongoose from "mongoose";


const CustomersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    authUser: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default CustomersSchema;
