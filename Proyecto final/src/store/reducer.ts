import { Actions, AppState, NavigateActions, ScreenActions } from "../types/store";

export const reducer = (
  currentAction: Actions,
  currentState: AppState
): AppState => {
  const { action, payload } = currentAction;
  const clone = JSON.parse(JSON.stringify(currentState));
  const emptyContent = () => {
    clone.content = null;
  };

  switch (action) {
    case ScreenActions.NAVIGATE:
      return {
        ...currentState,
        screen: payload,
      };

    case NavigateActions.CONTENT:
      emptyContent();
      return {
        ...currentState,
        content: payload,
      };

    default:
      return currentState;
  }
};
