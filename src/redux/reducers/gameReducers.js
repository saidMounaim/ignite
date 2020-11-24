const initState = {
	popular: [],
	newGames: [],
	upcoming: [],
	searched: [],
};

export const gameReducers = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_GAMES_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'FETCH_GAMES_SUCCESS':
			return {
				...state,
				loading: false,
				popular: action.payload,
			};
		case 'FETCH_GAMES_FAILED':
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case 'FETCH_UPCOMING_GAMES_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'FETCH_UPCOMING_GAMES_SUCCESS':
			return {
				...state,
				loading: false,
				upcoming: action.payload,
			};
		case 'FETCH_UPCOMING_GAMES_FAILED':
			return {
				...state,
				error: action.payload,
			};
		case 'FETCH_NEW_GAMES_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'FETCH_NEW_GAMES_SUCCESS':
			return {
				...state,
				loading: false,
				newGames: action.payload,
			};
		case 'FETCH_NEW_GAMES_FAILED':
			return {
				...state,
				error: action.payload,
			};
		case 'FERCH_GAME_SEARCH':
			return {
				...state,
				searched: action.payload,
			};
		case 'CLEAR_SEARCHED':
			return {
				...state,
				searched: [],
			};
		default:
			return state;
	}
};
