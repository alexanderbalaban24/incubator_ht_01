import {AvailableResolutions} from "../shared/enums";

export type ViewVideoModel = {
    id: number
    title: string
    author: string
    availableResolutions: AvailableResolutions[]
    canBeDownloaded: boolean
    minAgeRestriction: number | null
    createdAt: string
    publicationDate: string
};