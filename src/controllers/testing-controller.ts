import {Request, Response} from "express";
import {DB} from "../db/local-db";

export const deleteAllData = (req: Request, res: Response) => {
    DB.length = 0;
    res.sendStatus(204);
}