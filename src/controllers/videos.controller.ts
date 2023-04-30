import {Response} from "express";
import {DB} from "../db/local-db";
import {Video} from "../models/Video";
import {
    RequestEmpty,
    RequestWithBody,
    RequestWithParams,
    RequestWithParamsAndBody,
    ResponseEmpty
} from "../shared/types";
import {URIParamsVideoModel} from "../models/URIParamsVideoModel";
import {ViewVideoModel} from "../models/ViewVideoModel";
import {CreateVideoModel} from "../models/CreateVideoModel";
import {UpdateVideoModel} from "../models/UpdateVideoModel";


/**
 * Get all videos
 *
 * @param {ResponseEmpty} req
 * @param {Response<ViewVideoModel[]>} res
 *
 * @return {void}
 */
export const getAllVideos = (req: RequestEmpty, res: Response<ViewVideoModel[]>) => {
    res.status(200).send(DB);
}

/**
 * Create new video
 *
 * @param {RequestWithBody<CreateVideoModel>} req
 * @param {Response<ViewVideoModel>} res
 *
 * @return {void}
 */
export const createVideo = (req: RequestWithBody<CreateVideoModel>, res: Response<ViewVideoModel>) => {
    const {
        title,
        author,
        availableResolutions
    } = req.body;

    const newVideo: ViewVideoModel = new Video(title, author, availableResolutions);
    DB.push(newVideo);
    res.status(201).send(newVideo);
}


/**
 *Get specific video
 *
 * @param {RequestWithParams<URIParamsVideoModel>} req
 * @param {Response<ViewVideoModel>} res
 */
export const getVideo = (req: RequestWithParams<URIParamsVideoModel>, res: Response<ViewVideoModel>) => {
    const {id} = req.params;

    const index = DB.findIndex((el) => el.id === +id);

    if (index != -1) {
        res.status(200).send(DB[index]);
    } else {
        res.sendStatus(404);
    }
}

/**
 * Deleting specific video
 *
 * @param {RequestWithParams<URIParamsVideoModel>} req
 * @param {ResponseEmpty} res
 */
export const deleteVideo = (req: RequestWithParams<URIParamsVideoModel>, res: ResponseEmpty) => {
    const {id} = req.params;

    const index = DB.findIndex((el) => el.id === +id);

    if (index != -1) {
        DB.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}

/**
 * Updating video
 *
 * @param {RequestWithParamsAndBody<URIParamsVideoModel, UpdateVideoModel>} req
 * @param {ResponseEmpty} res
 */
export const updateVideo = (req: RequestWithParamsAndBody<URIParamsVideoModel, UpdateVideoModel>, res: ResponseEmpty) => {
    const {id} = req.params;

    const index = DB.findIndex((el) => el.id === +id);

    if (index != -1) {
        DB[index] = {...DB[index], ...req.body};
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}