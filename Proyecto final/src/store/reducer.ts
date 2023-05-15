import { Action } from "../Types/Interfaces";
import { ActionTypes, NavigationActions } from "../Types/store";

export const reducer = (action: Action, currentState: any): any => {
    const clone = JSON.parse(JSON.stringify(currentState));
    const {actions, payload} = currentState;

    const emptyContent = () => {
        clone.contentGames = null;
        clone.contentPost = null;
        clone.contentProfile = null;
        clone.screen = null;
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
            
        case ActionTypes.UPDATE_MYGAMES:
            emptyContent();
            return{
                ...clone,
                contentMygames: "compMyGames",
            }

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
            }

        default:
            return clone;
    }
}
