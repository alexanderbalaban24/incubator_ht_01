import {AvailableResolutions} from "../shared/enums";
import {IVideos} from "../shared/interfaces";


export class Video implements IVideos {

    public id: number = Math.floor(Math.random() * 99999999999999999999);

    constructor(
        public title: string,
        public author: string,
        public availableResolutions = [AvailableResolutions.P144],
        public canBeDownloaded= false,
        public minAgeRestriction= null,
        public createdAt = new Date().toISOString(),
        public publicationDate = new Date(new Date(createdAt).getTime() + 86400000).toISOString()
    ) {}
}