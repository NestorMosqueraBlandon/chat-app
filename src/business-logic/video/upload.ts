import { v4 as UUID } from 'uuid';
import { Video } from '../../types/video';
import { VideoSchema } from '../../types/video/video-schema';

type PartialVideo = Partial<Video>;
export const createVideo = async (data: PartialVideo): Promise<PartialVideo> => {
    const uuid = UUID();

    let video = await VideoSchema.insert({...data, uuid})
    return video.raw;
}
