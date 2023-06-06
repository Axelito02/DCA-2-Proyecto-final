import { Actions, NavigateActions, ScreenActions, Screens, SaveInfoUser } from "../types/store";
import { ScreenNavigateAction } from "../types/interfaces";
import { Usuario } from "../types/usuario";
import firebase from "../utils/firebase";

export const navigate = (screen: Screens): ScreenNavigateAction => {
  return {
    action: ScreenActions.NAVIGATE,
    payload: screen,
  };
};

export const saveInputs = (
  usuario: Usuario
): Actions => {
  return {
    action: SaveInfoUser.SAVE_INFO_USER,
    payload: usuario,
  };
};
