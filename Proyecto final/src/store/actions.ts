import { NavigationActions, Screens } from "../types/store";
import { NavigateAction } from "../utils/interfaces";

export const navigate = (screen: Screens): NavigateAction => {
  return {
    action: NavigationActions.NAVIGATE,
    payload: screen,
  };
};
