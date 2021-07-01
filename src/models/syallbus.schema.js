import mongoose from "mongoose";
import {SUBJECT} from "../models/models.Constants"

const SyllabusSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    SubjectId: { type: mongoose.Types.ObjectId, ref: SUBJECT, required: false },
   
  },
  { timestamps: true }
);

export default SyllabusSchema;