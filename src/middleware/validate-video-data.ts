import {NextFunction, Request, Response} from "express";
import {ErrorField} from "../shared/types";
import {AvailableResolutions} from "../shared/enums";


export const validateVideoData = (req: Request, res: Response, next: NextFunction) => {
    const fieldsError: ErrorField[] = [];
    const {
        title,
        author,
        availableResolutions
    } = req.body;

    if (availableResolutions && availableResolutions.length) {

        if (!availableResolutions.every((el: AvailableResolutions) => AvailableResolutions[el])) {
            const error: ErrorField = {
                message: `The field AvailableResolutions does not match the available resolutions`,
                field: availableResolutions
            };
            fieldsError.push(error);
        }
    }

    if (!title) {
        const error: ErrorField = {
            message: `The field Title should is not equal undefined`,
            field: "title"
        };
        fieldsError.push(error);
    } else {
        if (title.length >= 40) {
            const error: ErrorField = {
                message: `The field Title must be a string with a maximum length of '40'`,
                field: "title"
            };
            fieldsError.push(error);
        }
    }

    if (!author) {
        const error: ErrorField = {
            message: `The field Author should is not equal undefined`,
            field: "author"
        };
        fieldsError.push(error);
    } else {
        if (author.length >= 20) {
            const error: ErrorField = {
                message: `The field Author must be a string with a maximum length of '20'`,
                field: "author"
            };
            fieldsError.push(error);
        }
    }

    if (!fieldsError.length) {
        next();
    } else {
        res.status(400).send({errorsMessage: fieldsError})
    }
}