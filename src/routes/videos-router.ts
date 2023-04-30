import {Router} from "express";
import {createVideo, deleteVideo, getAllVideos, getVideo, updateVideo} from "../controllers/videos.controller";
import {validateVideoData} from "../middleware/validate-video-data";

/**
 * Video router to process the video endpoint
 */
export const videosRouter = Router();

videosRouter.route('/').get(getAllVideos).post(validateVideoData, createVideo);
videosRouter.route('/:id').get(getVideo).put(validateVideoData, updateVideo).delete(deleteVideo);