import Mongoose from 'mongoose';

import {
    BRANCH,COLLEGE,REGULATION,SEMESTER,SUBJECT,NOTES
} from './models.Constants';

import BranchSchema from './branch.schema';
import CollegeSchema from './college.schema';
import RegulationSchema from './regulations.schema';
import SemesterSchema from './semester.schema';
import SubjectSchema from './subject.schema';
import NotesSchema from './notes.schema';


export const BranchModel = Mongoose.model(BRANCH, BranchSchema);
export const CollegeModel = Mongoose.model(COLLEGE, CollegeSchema);
export const RegulationModel = Mongoose.model(REGULATION, RegulationSchema);
export const SemesterModel = Mongoose.model(SEMESTER, SemesterSchema);
export const SubjectModel = Mongoose.model(SUBJECT, SubjectSchema);
export const NotesModel = Mongoose.model(NOTES, NotesSchema);