import axios from 'axios';
import { popularGamesUrl, upcomingGamesUrl } from '../../api';

export const loadPopularGames = () => async (dispatch) => {
	try {
		dispatch({ type: 'FETCH_GAMES_REQUEST' });
		const popularData = await axios.get(popularGamesUrl());
		dispatch({
			type: 'FETCH_GAMES_SUCCESS',
			payload: popularData.data.results,
		});
	} catch (error) {
		dispatch({
			type: 'FETCH_GAMES_FAILED',
			payload: error.message,
		});
	}
};

export const loadUpcomingGames = () => async (dispatch) => {
	try {
		dispatch({ type: 'FETCH_UPCOMING_GAMES_REQUEST' });
		const upcomingData = await axios.get(upcomingGamesUrl());
		dispatch({ type: 'FETCH_UPCOMING_GAMES_SUCCESS', payload: upcomingData.data.results });
	} catch (error) {
		dispatch({
			type: 'FETCH_UPCOMING_GAMES_FAILED',
			payload: error.message,
		});
	}
};
