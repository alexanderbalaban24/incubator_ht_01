import {AvailableResolutions} from "./enums";

export interface IVideos {
    id: number;
    title: string;
    author: string;
    availableResolutions: AvailableResolutions[];
    canBeDownloaded: boolean;
    minAgeRestriction: number | null;
    createdAt: string;
    publicationDate: string;
}