import mongoose from "mongoose";
import {BRANCH} from "../models/models.Constants"

const RegulationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    BranchId: { type: mongoose.Types.ObjectId, ref: BRANCH, required: false },
   
  },
  { timestamps: true }
);

export default RegulationSchema;
