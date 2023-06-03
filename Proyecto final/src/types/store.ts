import { NavigateAction, ScreenNavigateAction } from "./interfaces";
export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  DASHBOARD = "DASHBOARD",
}

export enum Content {
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

export type AppState = {
  screen: Screens;
  content: Content;
};

export enum ScreenActions {
  "NAVIGATE" = "NAVIGATE",
}

export enum NavigateActions {
  "CONTENT" = "CONTENT",
}

export type Actions = ScreenNavigateAction | NavigateAction;
