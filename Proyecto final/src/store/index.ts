import { Action } from "../Types/Interfaces";
<<<<<<< HEAD
import { Observer, Screen } from "../Types/store";
=======
import { Observer } from "../Types/store";
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
import { reducer } from "./reducer";

export let appState = {
    contentGames: "compG",
    contentPost: "compPs",
    contentProfile: "compPr",
<<<<<<< HEAD
    contentLoginMobile: "compLMB",
    screen: Screen.LOGIN,
=======
    screenLogin: "screenL",
    screenRegister: "screenR",
>>>>>>> 814a32a24d0cd896c05d7a320e5295d7aea5eb5e
}

const oberservers: Observer[] = [];

export const dispatch = (action: Action) => {
    appState = reducer(action, appState);
    oberservers.forEach(o => o.render())
}

export const addObserver = (comp: Observer) => {
    oberservers.push(comp)
}
