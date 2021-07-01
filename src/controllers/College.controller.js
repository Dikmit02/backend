import { CollegeModel } from "../models/model.index"
import {APIError} from "../utilities/APIError"

//post
export const registerCollegeController = async (req, res, next) => {
    const data = req.body;

    const { email, name, address, authUser, contactNumber } = data
    if (!email || !name || !address || !authUser || !contactNumber) {
        throw new APIError(400, 'Please enter complete details');
    }

    try {
        const college = await CollegeModel.findOne({ name });
        if (college) {

            return next(new APIError(400, 'Already Exists'))
        }

        const newcollege = await new CollegeModel({
            email, name, address, authUser, contactNumber
        })
        const savedcollege = newcollege.save()
        res.status(200).json({
            success: true,
            savedcollege
        })
    } catch (error) {
        return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }

};


//get All College
export const getAllColleges = async (req, res) => {
    try {
        const college = await CollegeModel.find({});
        res.status(200).json({
            success: true,
            college
        })
    } catch (error) {
        return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }
};


//update clg
export const UpdateCollege = async (req, res, next) => {
    try {
        const college = await College.findById(req.params.id)
        if (!college) {
            return next(new APIError(400, 'College not found with this ID'))
        }
        // console.log('chgvh ',req.body )

        const updateResult = await College.updateOne(
            { _id: Mongoose.Types.ObjectId(req.params.id) },
            { ...req.body }
        );

        res.send({
            status: true,
            updateResult
        });
    } catch (error) {
        console.log('errr ', error)
        return next(

            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }

}


// Delete Clg  
export const DeleteCollege = async (req, res, next) => {

    try {
        const college = await College.findById(req.params.id)
        if (!college) {
            return next(new APIError(400, 'College not found with this ID'))
        }
        const removedcollege = await college.remove();

        res.status(200).json({
            success: true,
            removedcollege
        })
    } catch (error) {
        return next(
            new APIError(500, 'UNAUTHORIZED_REQUEST')
        );
    }

}
