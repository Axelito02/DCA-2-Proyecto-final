import { Actions, ScreenActions, Screens, SaveInfoUser, PostActions } from "../types/store";
import { AttrComment, ScreenNavigateAction } from "../types/interfaces";
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

export const savePost = async (post: AttrComment): Promise<Actions> => {
  await firebase.savePostInDB(post);
  return {
    action: PostActions.SAVE_POST,
    payload: post,
  }
}

export const getPost = async (): Promise<Actions> => {
  const DataPost = await firebase.getPostFromDB();
  return {
    action: PostActions.GET_POST,
    payload: DataPost,
  }
} 