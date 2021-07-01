import { SubjectModel, NotesModel } from "../models/model.index"
import { APIError } from "../utilities/APIError"

//get All Notes
export const getAllNotes = async (req, res,next) => {

    const id = req.params.subjectId;
    try {
        const SubjectId = await SubjectModel.findById(id)
        if (!SubjectId) {
            return next(new APIError(400, 'Subject not found with this ID'))
        }
        const notesBySubjectId = await NotesModel.find({
            SubjectId
        });
        res.status(200).json({
            success: true,
            notesBySubjectId
        })
    } catch (error) {
       return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }
};



// add Notes
export const addNotes = async (req, res, next) => {

    
    const data = req.body
    const id = req.params.subjectId;
    const { name } = data
    if (!name) {
        throw new APIError(400, 'Please enter complete details');
    }

    try {

        const SubjectId = await SubjectModel.findById(id)
        if (!SubjectId) {
            return next(new APIError(400, 'Regulation not found with this ID'))
        }

        const subject = await NotesModel.findOne({
            $and: [{ name }, { SubjectId }]
        });

        if (subject) {
            return next(new APIError(400, 'Already Exists'))
        }

        const newSubject = await new NotesModel({
            name,
            SubjectId: SubjectId
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

