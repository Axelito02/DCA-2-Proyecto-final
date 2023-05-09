import { Action } from "../Types/Interfaces";
<<<<<<< HEAD
import { ActionTypes, NavigationActions } from "../Types/store";

export const reducer = (action: Action, currentState: any): any => {
    const clone = JSON.parse(JSON.stringify(currentState));
    const {actions, payload} = currentState;

=======
import { ActionTypes } from "../Types/store";


export const reducer = (action: Action, currentState: any): any => {
    const clone = JSON.parse(JSON.stringify(currentState));
    
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
    const emptyContent = () => {
        clone.contentGames = null;
        clone.contentPost = null;
        clone.contentProfile = null;
<<<<<<< HEAD
        clone.screen = null;
=======
        clone.screenLogin = null;
        clone.screenRegister = null;
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
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
<<<<<<< HEAD

        case ActionTypes.UPDATE_MYGAMES:
        emptyContent();
        return{
            ...clone,
            contentProfile: "compMyGames",
        }

        case ActionTypes.UPDATE_LOGINMOBILE:
        emptyContent();
        return{
            ...clone,
            contentProfile: "compLoginMobile",
        }
            
        case NavigationActions.NAVIGATE:
            emptyContent();
            return{
                ...clone,
                screen: payload,
=======
            
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
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
            }

        default:
            return clone;
    }
}
