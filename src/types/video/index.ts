interface SocialNetwork {

}

interface Experience {

}

interface Skill {

}

interface Comment {
    uuid: string;
    user: string;
    text: string;
}

export interface Video {
    uuid: string;
    title: string;
    description: string;
    hashtag: string[];
    hiring: string;
    url: string;
    song: string;
    user: string;
    type: string;
    likes: number;
    privacity: string;
    comments: Comment[];
    location: string;
    job_type: string;
    modality_type: string;
}