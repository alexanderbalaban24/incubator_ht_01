import {DB} from '../db/local-db';
import {ViewVideoModel} from "../models/ViewVideoModel";
import {Video} from "../models/Video";
import {AvailableResolutions} from "../shared/enums";

export const videosRepository = {
    findVideos() {
        return DB;
    },
    findVideoById(id: number) {
        const video: ViewVideoModel | undefined = DB.find((el) => el.id === id);
        return video;
    },
    createVideo(title: string,
                author: string,
                availableResolutions?: AvailableResolutions[]) {
        const newVideo = new Video(title, author, availableResolutions);
        DB.push(newVideo);
        return newVideo;
    },
    updateVideo(id: number, title: string,
                author: string,
                availableResolutions: AvailableResolutions[],
                canBeDownloaded: boolean,
                minAgeRestriction: number | null,
                publicationDate: string
    ) {
        const video: ViewVideoModel | undefined = DB.find((el) => el.id === id);

        if (video) {
            video.title = title ? title : video.title
            video.author = author ? author : video.author
            video.availableResolutions = availableResolutions ? availableResolutions : video.availableResolutions
            video.canBeDownloaded = canBeDownloaded ? canBeDownloaded : video.canBeDownloaded
            video.minAgeRestriction = minAgeRestriction ? minAgeRestriction : video.minAgeRestriction
            video.publicationDate = publicationDate ? publicationDate : video.publicationDate
            return true;
        } else {
            return false;
        }
    },
    deleteVideo(id: number) {
        const index = DB.findIndex((el) => el.id === +id);

        if (index != -1) {
            DB.splice(index, 1);
            return true;
        } else {
            return false;
        }

    }
}