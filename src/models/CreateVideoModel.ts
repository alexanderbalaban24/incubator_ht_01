import {AvailableResolutions} from "../shared/enums";

export type CreateVideoModel = {
    id: number
    title: string
    author: string
    availableResolutions?: AvailableResolutions[]
};