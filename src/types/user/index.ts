interface SocialNetwork {
    uuid: string;
    name: string;
}

interface Experience {
    uuid: string;
    name: string;
}

interface Preference {
    uuid: string;
    name: string;
}

interface Skill {
    uuid: string;
    name: string;
}

interface Language {
    uuid: string;
    name: string;
}

export interface User {
    uuid: string;
    name: string;
    lastName: string;
    email: string;
    gender?: string;
    phone: string;
    birthday?: string;
    username?: string;
    country?: string;
    province?: string;
    city?: string;
    preferences?: Preference[];
    salary?: number;
    summary?: string;
    links?: string[];
    password?: string;
    titular?: string;
    video?: string;
    photo?: string;
    social_netwoeks?: SocialNetwork[];
    experience?: Experience[];
    skills?: Skill[];
    langueges?: Language[];
    followers?: string[];
    followed?: string[];
    views?: string[];
}