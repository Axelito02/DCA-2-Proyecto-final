import { Content, NavigateActions, ScreenActions, Screens } from "../types/store";
import { NavigateAction, ScreenNavigateAction } from "../types/interfaces";

export const navigate = (screen: Screens): ScreenNavigateAction => {
  return {
    action: ScreenActions.NAVIGATE,
    payload: screen,
  };
};

export const navNavigate = (content: Content): NavigateAction => {
  return {
    action: NavigateActions.CONTENT,
    payload: content,
  };
};
