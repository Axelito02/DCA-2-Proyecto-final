import { Action } from "../../../Types/Interfaces";
import { Observer, Screen } from "../../../Types/store";
import { reducer } from "../../../store/reducer";

export let contentState = {
    contentAccount: "compA",
    contentFriends: "compFri",
    contentFavorites: "compFav",
    contentNofitications: "compNotifi",
    contentSettings: "compSett",
    screen: Screen.DASHBOARD,
}

const oberservers: Observer[] = [];

export const dispatch = (action: Action) => {
    contentState = reducer(action, contentState);
    oberservers.forEach(o => o.render())
}

export const addObserver = (comp: Observer) => {
    oberservers.push(comp)
}