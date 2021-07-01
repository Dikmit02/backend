import { BranchModel, CollegeModel } from "../models/model.index"
import { APIError } from "../utilities/APIError"

//get All Branches
export const getAllBranch = async (req, res) => {

    const id=req.params.collegeId;
    try {
        const CollegeId = await CollegeModel.findById(id)
        if (!CollegeId) {
            return next(new APIError(400, 'College not found with this ID'))
        }

        const branchbyClgId = await BranchModel.find({
            CollegeId
        });
        res.status(200).json({
            success: true,
            branchbyClgId
        })
    } catch (error) {
        console.log('Error ', error)
        return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }
};

// add Branch to College
export const addBranch = async (req, res, next) => {

    const data = req.body;
    const id=req.params.collegeId;
    const { name } = data
    if (!name) {
        throw new APIError(400, 'Please enter complete details');
    }

    try {

        const CollegeId = await CollegeModel.findById(id)
        if (!CollegeId) {
            return next(new APIError(400, 'College not found with this ID'))
        }

        const branch = await BranchModel.findOne({
            $and: [{ name }, { CollegeId }]
        });

        if (branch) {
            return next(new APIError(400, 'Already Exists'))
        }

        const newBranch = await new BranchModel({
            name,
            CollegeId: CollegeId
        })
        const savedBranch = newBranch.save()
        res.status(200).json({
            success: true,
            savedBranch
        })
    } catch (error) {
        console.log('Error ', error)
        return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }

};