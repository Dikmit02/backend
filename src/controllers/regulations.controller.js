import { BranchModel, RegulationModel } from "../models/model.index"
import { APIError } from "../utilities/APIError"

//get All College
export const getAllRegulations = async (req, res) => {

    const id = req.params.branchId;
    try {
        const BranchId = await BranchModel.findById(id)
        if (!BranchId) {
            return next(new APIError(400, 'Branch not found with this ID'))
        }
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

    const data = req.body
    const id = req.params.branchId;
    const { name } = data
    if (!name) {
        throw new APIError(400, 'Please enter complete details');
    }

    try {

        const BranchId = await BranchModel.findById(id)
        if (!BranchId) {
            return next(new APIError(400, 'Branch not found with this ID'))
        }

        const regulation = await RegulationModel.findOne({
            $and: [{ name }, { BranchId }]
        });

        if (regulation) {
            return next(new APIError(400, 'Already Exists'))
        }

        const newRegulation = await new RegulationModel({
            name,
            BranchId: BranchId
        })
        const savedRegulation = newRegulation.save()
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