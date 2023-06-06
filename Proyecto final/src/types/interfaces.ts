import { ScreenActions, Screens, SaveInfoUser, PostActions } from "./store";
import { Usuario } from "./usuario";

export interface ScreenNavigateAction {
    action: ScreenActions.NAVIGATE;
    payload: Screens;
}

export interface SaveInfoAction {
    action: SaveInfoUser.SAVE_INFO_USER;
    payload: Usuario;
}

export interface GetPots {
    action: PostActions.GET_POST
    payload: AttrComment[];
}

export interface SavePots {
    action: PostActions.SAVE_POST
    payload: AttrComment;
}

export interface AttrCards {
    name: string;
    thumbnail: string;
    publisher: string;
    releaseyear: string;
}

export interface AttrGameWeek {
    name: string;
    thumbnail: string;
    description: string;
    alt: string;
}

export interface AttrLogin {
    email: string;
    password: string;
}

export interface AttrRegister {
    username: string;
    email: string;
    password: string;
}

export interface AttrComments {
    username: string;
    thumbnail: string;
    hastag: string;
    comment: string;
}

export interface AttrProfile {
    username: string;
    thumbnail: string;
    name: string;
    email: string;
}

export interface AttrComment {
    comment: string;
}

export interface AttrGames {
    thumbnail: string;
}

export interface Friends {
    thumbnail: string;
    username: string;
    lastcontecion: string;
}

export interface Notifications {
    thumbnail: string;
    username: string;
    notification: string;
}

export interface Socials {
    thumbnail: string;
    link: string;
}
