import { NavigationActions } from "./store";

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

export interface Action {
    type: string,
}

export interface ScreenAction {
    action: NavigationActions.NAVIGATE;
    payload: Screen
}
