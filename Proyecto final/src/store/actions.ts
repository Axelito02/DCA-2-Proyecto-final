<<<<<<< HEAD
import { ActionTypes, NavigationActions } from "../Types/store"
import { ScreenAction } from "../Types/Interfaces"

=======
import { ActionTypes } from "../Types/store"
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e

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

<<<<<<< HEAD
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
=======
export const ScreenLogin = () => {
    return {
        type: ActionTypes.UPDATE_LOGIN,
    }
}

export const ScreenRegister = () => {
    return {
        type: ActionTypes.UPDATE_REGISTER,
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
    }
}
