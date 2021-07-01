import { SubjectModel, SemesterModel } from "../models/model.index"
import { APIError } from "../utilities/APIError"

//get Subjects
export const getAllSubject = async (req, res,next) => {

    const id = req.params.semesterId;
    try {
        const SemesterId = await SemesterModel.findById(id)
        if (!SemesterId) {
            return next(new APIError(400, 'Semester not found with this ID'))
        }
        const subjectBySemesterID = await SubjectModel.find({
            SemesterId
        });
        res.status(200).json({
            success: true,
            subjectBySemesterID
        })
    } catch (error) {
       return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }
};



// add Subject to Semester
export const addSubject = async (req, res, next) => {

    
    const data = req.body
    const id = req.params.semesterId;
    const { name } = data
    if (!name) {
        throw new APIError(400, 'Please enter complete details');
    }

    try {

        const SemesterID = await SemesterModel.findById(id)
        if (!SemesterID) {
            return next(new APIError(400, 'Semester not found with this ID'))
        }

        const subject = await SubjectModel.findOne({
            $and: [{ name }, { SemesterID }]
        });

        if (subject) {
            return next(new APIError(400, 'Already Exists'))
        }

        const newSubject = await new SubjectModel({
            name,
            SemesterId: SemesterID
        })
        const savedSubject = newSubject.save()
        res.status(200).json({
            success: true,
            savedSubject
        })
    } catch (error) {
        console.log('ERR ', error)
        return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }

};

