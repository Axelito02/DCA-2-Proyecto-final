import { ActionTypes, NavigationActions } from "../Types/store"
import { ScreenAction } from "../Types/Interfaces"

export const ChagedContent = () => {
    return {
        type: ActionTypes.UPDATE_GAMES,
    }
}

export const ChagedPost = () => {
    return {
        type: ActionTypes.UPDATE_POST,
    }
}

export const ChagedFavorites = () => {
    return {
        type: ActionTypes.UPDATE_FAVORITES,
    }
}

export const ChagedNotification = () => {
    return {
        type: ActionTypes.UPDATE_NOTIFICATIONS,
    }
}

export const ChagedSettings = () => {
    return {
        type: ActionTypes.UPDATE_SETTINGS,
    }
}
export const ChagedAccount = () => {
    return {
        type: ActionTypes.UPDATE_ACCOUNT,
    }
}

export const ChagedFriends = () => {
    return {
        type: ActionTypes.UPDATE_FRIENDS,
    }
}

export const ChagedLoginMobile = () => {
    return {
        type: ActionTypes.UPDATE_LOGINMOBILE,
    }
}

export const ChagedMyGames = () => {
    return {
        type: ActionTypes.UPDATE_MYGAMES,
    }
}

export const ChagedProfile = () => {
    return {
        type: ActionTypes.UPDATE_PROFILE,
    }
}

export const ScreenNavigate = (screen: Screen): ScreenAction=> {
    return {
        action: NavigationActions.NAVIGATE,
        payload: screen,
    }
}
