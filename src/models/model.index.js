import Mongoose from 'mongoose';

import {
    BRANCH,COLLEGE,REGULATION,SEMESTER,SUBJECT,NOTES,QUESTIONPAPER,RESOURCES,SYLLABUS,USERS
} from './models.Constants';

import BranchSchema from './branch.schema';
import CollegeSchema from './college.schema';
import RegulationSchema from './regulations.schema';
import SemesterSchema from './semester.schema';
import SubjectSchema from './subject.schema';
import NotesSchema from './notes.schema';
import ResourcesSchema from './resources.schema';
import QuestionPaperSchema from './questionpaper.schema';
import SyallbusSchema from './syallbus.schema';
import UserSchema from './user.schema';

export const BranchModel = Mongoose.model(BRANCH, BranchSchema);
export const CollegeModel = Mongoose.model(COLLEGE, CollegeSchema);
export const RegulationModel = Mongoose.model(REGULATION, RegulationSchema);
export const SemesterModel = Mongoose.model(SEMESTER, SemesterSchema);
export const SubjectModel = Mongoose.model(SUBJECT, SubjectSchema);
export const NotesModel = Mongoose.model(NOTES, NotesSchema);
export const QuestionPaperModel = Mongoose.model(QUESTIONPAPER, QuestionPaperSchema);
export const SyallbusModel = Mongoose.model(SYLLABUS, SyallbusSchema);
export const ResoucesModel = Mongoose.model(RESOURCES,ResourcesSchema);
export const UserModel =Mongoose.model(USERS, UserSchema)