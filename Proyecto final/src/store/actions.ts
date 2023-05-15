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

export const ChagedProfile = () => {
    return {
        type: ActionTypes.UPDATE_PROFILE,
    }
}

export const ChagedMyGames = () => {
    return {
        type: ActionTypes.UPDATE_MYGAMES,
    }
}

export const ChagedLoginMobile = () => {
    return {
        type: ActionTypes.UPDATE_LOGINMOBILE,
    }
}

export const ScreenNavigate = (screen: Screen): ScreenAction=> {
    return {
        action: NavigationActions.NAVIGATE,
        payload: screen,
    }
}
