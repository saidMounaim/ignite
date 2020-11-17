const initState = {
    loading: false,
    popular: [],
    newGames: [],
    upcoming: []
}

export const gameReducers = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES_REQUEST":
            return { ...state }
        case "FETCH_GAMES_SUCCESS":
            return { ...state }
        case "FETCH_GAMES_FAILED":
            return { ...state }
        default:
            return state;
    }
}