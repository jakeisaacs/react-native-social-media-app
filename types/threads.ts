export interface Thread {
    id: string;
    author: User;
    content: string;
    image?: string;
    replies?: Reply[];
    repliesCount: number;
    likesCount: number;
    mention?: boolean;
    mentionUser?: User;
    created: string;
}

export interface Reply {
    id: string;
    author: User;
    content: string;
    likes: number;
    created: string;
}

export interface User {
    id: string;
    name: string;
    username: string;
    verified: boolean;
    photo: string;
    bio: string;
    link?: string;
    followers?: User[];
}