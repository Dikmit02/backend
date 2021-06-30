import { BranchModel,RegulationModel } from "../models/model.index"
import { APIError } from "../utilities/APIError"

//get All College
export const getAllRegulations = async (req, res) => {

    try {
        const BranchId = req.branch._id

        

        const regulationByBranchId = await RegulationModel.find({
            BranchId
        });
        res.status(200).json({
            success: true,
            regulationByBranchId
        })
    } catch (error) {
        console.log('Error ', error)
        return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }
};

// add Branch to College
export const addRegulations = async (req, res, next) => {

    const data=req.body
    const { name } = data
    if (!name) {
        throw new APIError(400, 'Please enter complete details');
    }

    try {

        const BranchId = req.branch._id

        const regulation = await RegulationModel.findOne({
            $and: [{ name }, { BranchId }]
        });

        if (regulation) {
            return next(new APIError(400, 'Already Exists'))
        }

        const newRegulation = await new RegulationModel({
            name,
            BranchId: req.branch._id
        })
        const savedRegulation  = newRegulation.save()
        res.status(200).json({
            success: true,
            savedRegulation
        })
    } catch (error) {
        console.log('Error ', error)
        return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }

};