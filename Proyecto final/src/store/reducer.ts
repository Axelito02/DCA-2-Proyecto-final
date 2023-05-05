import { Action } from "../Types/Interfaces";
import { ActionTypes } from "../Types/store";


export const reducer = (action: Action, currentState: any): any => {
    const clone = JSON.parse(JSON.stringify(currentState));
    
    const emptyContent = () => {
        clone.contentGames = null;
        clone.contentPost = null;
        clone.contentProfile = null;
        clone.screenLogin = null;
        clone.screenRegister = null;
    };

    switch (action.type) {
        case ActionTypes.UPDATE_GAMES:
            emptyContent();
            return {
                ...clone,
                contentGames: "compGames",
            }

        case ActionTypes.UPDATE_POST:
            emptyContent();
            return {
                ...clone,
                contentPost: "compPost",
            }

        case ActionTypes.UPDATE_PROFILE:
            emptyContent();
            return{
                ...clone,
                contentProfile: "compProfile",
            }
            
        case ActionTypes.UPDATE_LOGIN:
            emptyContent();
            return{
                ...clone,
                screenLogin: "screenLogin",
            }

        case ActionTypes.UPDATE_REGISTER:
            emptyContent();
            return{
                ...clone,
                screenRegister: "screenRegister",
            }

        default:
            return clone;
    }
}
