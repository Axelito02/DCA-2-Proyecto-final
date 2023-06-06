import { Actions, ScreenActions, Screens, SaveInfoUser, PostActions } from "../types/store";
import { AttrComment, ScreenNavigateAction } from "../types/interfaces";
import { Usuario } from "../types/usuario";
import {savePostInDB, getPostFromDB} from "../utils/firebase";

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
  await savePostInDB(post);
  return {
    action: PostActions.SAVE_POST,
    payload: post,
  }
}

export const getPost = async (): Promise<Actions> => {
  const DataPost = await getPostFromDB();
  return {
    action: PostActions.GET_POST,
    payload: DataPost,
  }
} 

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};