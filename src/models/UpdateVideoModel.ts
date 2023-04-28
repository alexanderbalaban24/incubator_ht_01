import {AvailableResolutions} from "../shared/enums";

export type UpdateVideoModel = {
    id: number
    title: string
    author: string
    availableResolutions?: AvailableResolutions[]
    canBeDownloaded: boolean
    minAgeRestriction: number | null
    publicationDate: string
};