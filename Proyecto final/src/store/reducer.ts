import { Actions, AppState, ScreenActions, SaveInfoUser, PostActions } from "../types/store";

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

    case PostActions.SAVE_POST:
      return {
        ...currentState,
        Post: [...currentState.Post, payload],
      };

    case PostActions.GET_POST:
      return {
        ...currentState,
        Post: payload,
      };

    default:
      return currentState;

  }
};