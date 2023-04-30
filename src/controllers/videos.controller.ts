import {Response} from "express";
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
import {videosRepository} from "../repositories/videos-repository";


/**
 * Get all videos
 *
 * @param {ResponseEmpty} req
 * @param {Response<ViewVideoModel[]>} res
 *
 * @return {void}
 */
export const getAllVideos = (req: RequestEmpty, res: Response<ViewVideoModel[]>) => {
    const videos = videosRepository.findVideos();
    res.status(200).send(videos);
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

    const newVideo = videosRepository.createVideo(title, author, availableResolutions);
    res.status(201).send(newVideo);
}


/**
 *Get specific video
 *
 * @param {RequestWithParams<URIParamsVideoModel>} req
 * @param {Response<ViewVideoModel>} res
 */
export const getVideo = (req: RequestWithParams<URIParamsVideoModel>, res: Response<ViewVideoModel>) => {
    const video = videosRepository.findVideoById(+req.params.id);
    if (video) {
        res.status(200).send(video);
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
    const isDeleted = videosRepository.deleteVideo(+req.params.id);

    if (isDeleted) {
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
    const isUpdated = videosRepository.updateVideo(+req.params.id, req.body.title, req.body.author, req.body.availableResolutions, req.body.canBeDownloaded, req.body.minAgeRestriction, req.body.publicationDate);

    if (isUpdated) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}