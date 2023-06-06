import { Actions, AppState, NavigateActions, ScreenActions, SaveInfoUser } from "../types/store";

export const reducer = (
  currentAction: Actions,
  currentState: AppState,
): AppState => {
  const { action, payload } = currentAction;

  switch (action) {
    case ScreenActions.NAVIGATE:
      return {
        ...currentState,
        screen: payload,
      };

    case SaveInfoUser.SAVE_INFO_USER:
      const userPayload = payload;
      return {
        ...currentState,
        usuarios: [...currentState.usuarios, userPayload],
      };

    default:
      return currentState;

  }
};