
const { CollegeModel } = require('../models/model.index')
const { data } = require('../data/college')
const { dbConnect } = require("../services/databaseService")

dbConnect()
const seedColleges = async () => {
    try {

        await CollegeModel.deleteMany();
        console.log('Colleges are deleted');

        await CollegeModel.insertMany(data);
        console.log('All Colleges are added.');

        process.exit()


    } catch (error) {
        console.log(error.message);
        process.exit()
    }
}

seedColleges()
