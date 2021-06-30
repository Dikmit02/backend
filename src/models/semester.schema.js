import mongoose from "mongoose";
import {REGULATION} from "../models/models.Constants"

const SemesterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    RegulationId: { type: mongoose.Types.ObjectId, ref: REGULATION, required: false },
   
  },
  { timestamps: true }
);

export default SemesterSchema;