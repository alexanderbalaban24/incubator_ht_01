import {IVideos} from "../shared/interfaces";
import {AvailableResolutions} from "../shared/enums";
import {Video} from "../models/Video";

export const DB: IVideos[] = [
    new Video("2 - Swagger", "Дмитрий Кузюбердин", [AvailableResolutions.P2160]),
    new Video("Express Router", "Дмитрий Кузюбердин", [AvailableResolutions.P2160])
]