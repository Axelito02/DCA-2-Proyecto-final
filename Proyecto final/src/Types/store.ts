export type Observer = HTMLElement & { render: () => void };

export enum Screen {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    DASHBOARD = "DASHBOARD",
}

export type AppState ={
    screen: Screen
}

export enum NavigationActions {
    "NAVIGATE" = "NAVIGATE"
}

export enum ActionTypes {
    UPDATE_GAMES = "UPDATE_GAMES",
    UPDATE_POST = "UPDATE_POST",
    UPDATE_PROFILE = "UPDATE_PROFILE",
    UPDATE_MYGAMES = "UPDATE_MYGAMES",
    UPDATE_LOGINMOBILE = "UPDATE_LOGINMOBILE",
    UPDATE_FRIENDS = "UPDATE_FRIENDS",
    UPDATE_NOTIFICATIONS = "UPDATE_NOTIFICATIONS",
    UPDATE_SETTINGS = "UPDATE_SETTINGS",
    UPDATE_ACCOUNT = "UPDATE_ACCOUNT",
    UPDATE_FAVORITES = "UPDATE_FAVORITES",
}

export type Actions  = NavigationActions
