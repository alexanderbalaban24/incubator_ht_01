import {Router} from "express";
import {deleteAllData} from "../controllers/testing.controller";

/**
 * Router for implementing testing endpoint
 */
export const testingRouter = Router();

testingRouter.route('/all-data').delete(deleteAllData);

