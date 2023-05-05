import { ActionTypes } from "../Types/store"

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

export const ScreenLogin = () => {
    return {
        type: ActionTypes.UPDATE_LOGIN,
    }
}

export const ScreenRegister = () => {
    return {
        type: ActionTypes.UPDATE_REGISTER,
    }
}
