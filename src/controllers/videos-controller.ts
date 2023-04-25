import {Request, Response} from "express";
import {DB} from "../db/local-db";
import {Video} from "../models/Video";
import {IVideos} from "../shared/interfaces";


export const getAllVideos = (req: Request, res: Response) => {
    res.status(200).send(DB);
}
export const createVideo = (req: Request, res: Response) => {
    const {
        title,
        author,
        availableResolutions
    } = req.body;

    const newVideo = new Video(title, author, availableResolutions);
    DB.push(newVideo);
    res.status(201).send(newVideo);
}

export const getVideo = (req: Request, res: Response) => {
    const {id} = req.params;

    const index = DB.findIndex((el: IVideos) => el.id === +id);

    if (index != -1) {
        res.status(200).send(DB[index]);
    } else {
        res.sendStatus(404);
    }
}

export const deleteVideo = (req: Request, res: Response) => {
    const {id} = req.params;

    const index = DB.findIndex((el: IVideos) => el.id === +id);

    if (index != -1) {
        DB.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}

export const updateVideo = (req: Request, res: Response) => {
    const {id} = req.params;

    const index = DB.findIndex((el: IVideos) => el.id === +id);

    if (index != -1) {
        DB[index] = {...DB[index], ...req.body};
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }

}