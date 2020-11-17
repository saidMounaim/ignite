const initState = {
    popular: [],
    newGames: [],
    upcoming: []
}

export const gameReducers = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_GAMES_SUCCESS":
            return {
                ...state,
                loading: false,
                popular: action.payload
            }
        case "FETCH_GAMES_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}