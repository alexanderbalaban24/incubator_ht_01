import {AvailableResolutions} from "./enums";
import {Request, Response} from "express";

export type ErrorField = {
    message: string,
    field: string
}

export type VideosType = {
    id: number
    title: string
    author: string
    availableResolutions: AvailableResolutions[]
    canBeDownloaded: boolean
    minAgeRestriction: number | null
    createdAt: string
    publicationDate: string
};

export type VideoTestType = {
    title: string
    author: string
    availableResolutions: string[]
};

export type RequestWithBody<T> = Request<{}, {}, T>;
export type RequestWithQuery<T> = Request<{}, {}, {}, T>;
export type RequestWithParams<T> = Request<T>;
export type RequestWithParamsAndBody<T, C> = Request<T, {}, C>;
export type RequestEmpty = Request<{}, {}, {}, {}>;
export type ResponseEmpty = Response<{}, {}>;