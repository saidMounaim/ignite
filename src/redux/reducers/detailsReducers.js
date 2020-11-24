const initialState = {
	details: {},
	screens: {},
};

export const detailsReducers = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_DETAILS_GAME':
			return {
				...state,
				details: action.payload.detail,
				screens: action.payload.screen,
				loading: false,
			};
		case 'FETCH_DETAILS_GAME_REQUEST':
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
