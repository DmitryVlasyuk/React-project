const defaultState = {
    charList: null

}

export const reducer = (state = defaultState, action) => {
    switch (action) {
        case "fillCharList":
            return({...state, charList: state.charList = action.payload})

        case "getCharList":

            return;

        default:
            return state;
    }

}