import {baseState} from "../store";

export const indexReducer = (state = baseState, action) => {
    switch (action.type) {
        case "ACTIONS": {
            return state = {...state, [action.payload.var]: action.payload.val}
        }
    }
    return state;
};
