import mongoose from "mongoose";
import {SEMESTER} from "../models/models.Constants"

const SubjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    SemesterId: { type: mongoose.Types.ObjectId, ref: SEMESTER, required: false },
    Syllabus:[{ type: String, required: true}],
    QuestionPaper:[{ type: String, required: true}],
    Resources:[{ type: String, required: true}],
  },
  { timestamps: true }
);

export default SubjectSchema;
