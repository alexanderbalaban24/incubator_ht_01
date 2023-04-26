import {NextFunction, Request, Response} from "express";
import {ErrorField} from "../shared/types";
import {AvailableResolutions} from "../shared/enums";


export const validateVideoData = (req: Request, res: Response, next: NextFunction) => {
    const fieldsError: ErrorField[] = [];
    const {
        title,
        author,
        availableResolutions,
        canBeDownloaded,
        minAgeRestriction,
        publicationDate
    } = req.body;

    if (availableResolutions) {
        if (!Array.isArray(availableResolutions)) {
            const error: ErrorField = {
                message: `The field AvailableResolutions must be a array`,
                field: "availableResolutions"
            };
            fieldsError.push(error);
        }

        if (availableResolutions.length) {
            if (!availableResolutions.every((el: AvailableResolutions) => AvailableResolutions[el])) {
                const error: ErrorField = {
                    message: `The field AvailableResolutions does not match the available resolutions`,
                    field: "availableResolutions"
                };
                fieldsError.push(error);
            }
        }

    }
//--------------------------------------------------------------------------------------------------------
    if (!title) {
        const error: ErrorField = {
            message: `The field Title should is not equal undefined`,
            field: "title"
        };
        fieldsError.push(error);
    } else {

        if (typeof title !== "string") {
            const error: ErrorField = {
                message: `The field Title must be a string`,
                field: "title"
            };
            fieldsError.push(error);
        }

        if (title.length >= 40) {
            const error: ErrorField = {
                message: `The field Title must be a maximum length of '40'`,
                field: "title"
            };
            fieldsError.push(error);
        }
    }
//-----------------------------------------------------------------------------------------------------
    if (!author) {
        const error: ErrorField = {
            message: `The field Author should is not equal undefined`,
            field: "author"
        };
        fieldsError.push(error);
    } else {

        if (typeof author !== "string") {
            const error: ErrorField = {
                message: `The field Author must be a string`,
                field: "author"
            };
            fieldsError.push(error);
        }

        if (author.length >= 20) {
            const error: ErrorField = {
                message: `The field Author must be a string with a maximum length of '20'`,
                field: "author"
            };
            fieldsError.push(error);
        }
    }
//-----------------------------------------------------------------------------------------------------
    if (canBeDownloaded) {
        if (typeof canBeDownloaded !== "boolean") {
            const error: ErrorField = {
                message: `The field CanBeDownloaded must be a boolean`,
                field: "canBeDownloaded"
            };
            fieldsError.push(error);
        }
    }
//-----------------------------------------------------------------------------------------------------
    if (minAgeRestriction) {
        if (typeof minAgeRestriction !== "number") {
            const error: ErrorField = {
                message: `The field minAgeRestriction must be a number`,
                field: "minAgeRestriction"
            };
            fieldsError.push(error);
        }

        if (minAgeRestriction > 18 || minAgeRestriction < 1) {
            const error: ErrorField = {
                message: `The field minAgeRestriction must be maximum '18' and minimum '1'`,
                field: "minAgeRestriction"
            };
            fieldsError.push(error);
        }
    }

    if (publicationDate) {
        if (typeof publicationDate !== "string") {
            const error: ErrorField = {
                message: `The field publicationDate must be a string`,
                field: "publicationDate"
            };
            fieldsError.push(error);
        }
    }

    if (!fieldsError.length) {
        next();
    } else {
        res.status(400).send({errorsMessages: fieldsError})
    }
}