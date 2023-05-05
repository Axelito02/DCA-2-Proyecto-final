import { Action } from "../Types/Interfaces";
import { Observer } from "../Types/store";
import { reducer } from "./reducer";

export let appState = {
    contentGames: "compG",
    contentPost: "compPs",
    contentProfile: "compPr",
    screenLogin: "screenL",
    screenRegister: "screenR",
}

const oberservers: Observer[] = [];

export const dispatch = (action: Action) => {
    appState = reducer(action, appState);
    oberservers.forEach(o => o.render())
}

export const addObserver = (comp: Observer) => {
    oberservers.push(comp)
}
