
const INIT_STATE = { list: [], detail: {} };

export const pokemonReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "list":
            return { list: [...action.payload], detail: {}};
        case "init":
            return INIT_STATE;
        case "detail":
            return { ...state , detail: {...state.detail, [action.payload.name]: action.payload.data }};
        default:
            return state;
    }
};