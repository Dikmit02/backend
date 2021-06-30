import { BranchModel, CollegeModel } from "../models/model.index"
import { APIError } from "../utilities/APIError"

//get College by ID
export const getBranchById = async (req, res, next, id) => {

    try {
        const college = await BranchModel.findById(id)
        if (!college) {
            return next(new APIError(400, 'College not found with this ID'))
        }

        req.branch = college;
        next();
    } catch (error) {
        return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }

};

//get All College
export const getAllBranch = async (req, res) => {

    try {
        const CollegeId = req.college._id
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
    const { name } = data
    if (!name) {
        throw new APIError(400, 'Please enter complete details');
    }

    try {

        const CollegeId = req.college._id

        const branch = await BranchModel.findOne({
            $and: [{ name }, { CollegeId }]
        });

        console.log('COLL ', branch)

        if (branch) {
            return next(new APIError(400, 'Already Exists'))
        }

        const newBranch = await new BranchModel({
            name,
            CollegeId: req.college._id
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