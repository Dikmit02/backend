import { SubjectModel, SyallbusModel } from "../models/model.index"
import { APIError } from "../utilities/APIError"

//get All Syallbus
export const getAllSyallbus = async (req, res,next) => {

    const id = req.params.subjectId;
    try {
        const SubjectId = await SubjectModel.findById(id)
        if (!SubjectId) {
            return next(new APIError(400, 'Subject not found with this ID'))
        }
        const SyallbusId = await SyallbusModel.find({
            SubjectId
        });
        res.status(200).json({
            success: true,
            SyallbusId
        })
    } catch (error) {
       return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }
};



// add Syallbus
export const addSyallbus = async (req, res, next) => {

    
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

        const subject = await SyallbusModel.findOne({
            $and: [{ name }, { SubjectId }]
        });

        if (subject) {
            return next(new APIError(400, 'Already Exists'))
        }

        const newSubject = await new SyallbusModel({
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

