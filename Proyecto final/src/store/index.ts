import { Action } from "../Types/Interfaces";
import { Observer, Screen } from "../Types/store";
import { reducer } from "./reducer";

export let appState = {
    contentGames: "compG",
    contentPost: "compPs",
    contentProfile: "compPr",
    contentLoginMobile: "compLMB",
    contentMygames: "compMG",
    contentFriends: "compFri",
    contentNofitications: "compNotifi",
    contentSettings: "compSett",
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
