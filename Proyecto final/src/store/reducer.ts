import { Action } from "../Types/Interfaces";
import { ActionTypes, NavigationActions } from "../Types/store";

export const reducer = (action: Action, currentState: any): any => {
    const clone = JSON.parse(JSON.stringify(currentState));
    const {actions, payload} = currentState;

    const emptyContent = () => {
        clone.contentGames = null;
        clone.contentPost = null;
        clone.contentProfile = null;
        clone.contentMygames = null;
        clone.contentLoginMobile = null;
        clone.contentFavorites = null;
        clone.contentFriends = null;
        clone.contentNotification = null;
        clone.contentAccount = null;
        clone.contentSettings = null;
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

        case ActionTypes.UPDATE_LOGINMOBILE:
            emptyContent();
            return{
                ...clone,
                contentLoginMobile: "compLoginMobile",
            }

        case ActionTypes.UPDATE_FAVORITES:
            emptyContent();
            return{
                ...clone,
                contentFavorites: "compFavorites",
            }

        case ActionTypes.UPDATE_FRIENDS:
            emptyContent();
            return{
                ...clone,
                contentFriends: "compFriends",
            }

        case ActionTypes.UPDATE_NOTIFICATIONS:
            emptyContent();
            return{
                ...clone,
                contentNotification: "compNotification",
            }

        case ActionTypes.UPDATE_ACCOUNT:
            emptyContent();
            return{
                ...clone,
                contentAccount: "compAccount",
            }

        case ActionTypes.UPDATE_SETTINGS:
            emptyContent();
            return{
                ...clone,
                contentSettings: "compSettings",
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
