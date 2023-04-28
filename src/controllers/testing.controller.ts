import {DB} from "../db/local-db";
import {RequestEmpty, ResponseEmpty} from "../shared/types";

export const deleteAllData = (req: RequestEmpty, res: ResponseEmpty) => {
    DB.length = 0;
    res.sendStatus(204);
}