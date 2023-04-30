import {DB} from "../db/local-db";
import {RequestEmpty, ResponseEmpty} from "../shared/types";

/**
 * Delete all data from local database for testing
 *
 * @param req
 * @param res
 *
 * @return {void}
 */
export const deleteAllData = (req: RequestEmpty, res: ResponseEmpty) => {
    DB.length = 0;
    res.sendStatus(204);
}