import mongoose from "mongoose";
import {COLLEGE} from "../models/models.Constants"

const BranchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    CollegeId: { type: mongoose.Types.ObjectId, ref: COLLEGE, required: false },
   
  },
  { timestamps: true }
);

export default BranchSchema;
