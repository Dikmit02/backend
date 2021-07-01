import express, { Router } from "express";
import collegeRouter from "./College.Router";
import branchRouter from "./branch.Router"
import regulations from "./regulations.Router"

export const router = express.Router();

router.use("/v1/college", collegeRouter); 
router.use("/v1/branch",branchRouter)
router.use("/v1/regulations",regulations)

