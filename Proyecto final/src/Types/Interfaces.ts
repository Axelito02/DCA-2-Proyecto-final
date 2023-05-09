<<<<<<< HEAD
import { NavigationActions } from "./store";

=======
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
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

export interface Action {
    type: string,
}
<<<<<<< HEAD

export interface ScreenAction {
    action: NavigationActions.NAVIGATE;
    payload: Screen
}
=======
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
