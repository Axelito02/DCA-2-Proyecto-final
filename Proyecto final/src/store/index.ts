import { ScreenAction } from "../Types/Interfaces";
import { Action } from "../Types/Interfaces";
import { Observer, Screen } from "../Types/store";
import { ScreenNavigate } from "./actions";
import { reducer } from "./reducer";

export let appState = {
    contentGames: "compG",
    contentPost: "compPs",
    contentProfile: "compPr",
    contentLoginMobile: "compLMB",
    contentMygames: "compMG",
    screen: Screen.DASHBOARD,
}

const oberservers: Observer[] = [];

export const dispatch = (action: Action) => {
    appState = reducer(action, appState);
    oberservers.forEach(o => o.render())
}

export const addObserver = (comp: Observer) => {
    oberservers.push(comp)
}
