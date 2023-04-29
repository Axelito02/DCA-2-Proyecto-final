import { NavigateAction, NavigationActions, Screens } from '../../../Types/store'

export const navigate = (screen: Screens): NavigateAction => {
    return {
        action: NavigationActions.NAVIGATE,
        payload: screen,
    }
}
