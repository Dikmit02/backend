import { SubjectModel, ResoucesModel } from "../models/model.index"
import { APIError } from "../utilities/APIError"

//get Resources
export const  getAllResources= async (req, res,next) => {

    const id = req.params.subjectId;
    try {
        const SubjectId = await SubjectModel.findById(id)
        if (!SubjectId) {
            return next(new APIError(400, 'Subject not found with this ID'))
        }
        const resourcesBySubjectId = await ResoucesModel.find({
            SubjectId
        });
        res.status(200).json({
            success: true,
            resourcesBySubjectId
        })
    } catch (error) {
       return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }
};



// add Resources
export const addResources = async (req, res, next) => {

    
    const data = req.body
    const id = req.params.subjectId;
    const { name } = data
    if (!name) {
        throw new APIError(400, 'Please enter complete details');
    }

    try {

        const SubjectId = await SubjectModel.findById(id)
        if (!SubjectId) {
            return next(new APIError(400, 'Subject not found with this ID'))
        }

        const subject = await ResoucesModel.findOne({
            $and: [{ name }, { SubjectId }]
        });

        if (subject) {
            return next(new APIError(400, 'Already Exists'))
        }

        const newSubject = await new ResoucesModel({
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

