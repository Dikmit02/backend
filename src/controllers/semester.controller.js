import { RegulationModel, SemesterModel } from "../models/model.index"
import { APIError } from "../utilities/APIError"

//get All Semester
export const getAllSemesters = async (req, res) => {

    const id = req.params.regulationId;
    try {
        const RegulationId = await RegulationModel.findById(id)
        if (!RegulationId) {
            return next(new APIError(400, 'Regulation not found with this ID'))
        }
        const semesterByRegulationID = await SemesterModel.find({
            RegulationId
        });
        res.status(200).json({
            success: true,
            semesterByRegulationID
        })
    } catch (error) {
        console.log(error)
       return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }
};

// add Semester 
export const addSemesters = async (req, res, next) => {

    
    const data = req.body
    const id = req.params.regulationId;
   const { name } = data
    if (!name) {
        throw new APIError(400, 'Please enter complete details');
    }

    try {

        const RegulationID = await RegulationModel.findById(id)
        if (!RegulationID) {
            return next(new APIError(400, 'Regulation not found with this ID'))
        }

        const semester = await SemesterModel.findOne({
            $and: [{ name }, { RegulationID }]
        });

        if (semester) {
            return next(new APIError(400, 'Already Exists'))
        }

        const newSemester = await new SemesterModel({
            name,
            RegulationId: RegulationID
        })
        const savedSemester = newSemester.save()
        res.status(200).json({
            success: true,
            savedSemester
        })
    } catch (error) {
        console.log(error)
        return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }

};