import { NavigateAction } from "../utils/interfaces";
export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  DASHBOARD = "DASHBOARD",
}

export type AppState = {
  screen: Screens;
};

export enum NavigationActions {
  "NAVIGATE" = "NAVIGATE",
}

export type Actions = NavigateAction;
