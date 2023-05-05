export type Observer = HTMLElement & { render: () => void };

export enum ActionTypes {
    UPDATE_GAMES = "UPDATE_GAMES",
    UPDATE_POST = "UPDATE_POST",
    UPDATE_PROFILE = "UPDATE_PROFILE",
    UPDATE_LOGIN = "UPDATE_LOGIN",
    UPDATE_REGISTER = "UPDATE_REGISTER",
}
