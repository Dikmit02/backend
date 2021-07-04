import express, { Router } from "express";
import collegeRouter from "./College.Router";
import branchRouter from "./branch.Router"
import regulations from "./regulations.Router"
import semester from "./semester.Router"
import subject from "./subject.Router"
import notes from "./notes.Router"
import questionpaper from "./questionpaper.Router"
import syallbus from "./syllabus.Router"
import resources from "./resources.Router"
import admin from "./admin.Router"

export const router = express.Router();


router.use("/v1/admin",admin)
router.use("/v1/college", collegeRouter); 
router.use("/v1/branch",branchRouter)
router.use("/v1/regulations",regulations)
router.use("/v1/semester",semester)
router.use("/v1/subject",subject)
router.use("/v1/notes",notes)
router.use("/v1/qs",questionpaper)
router.use("/v1/syllabus",syallbus)
router.use("/v1/resources",resources)
