import axios from 'axios';
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchGameUrl } from '../../api';

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

export const loadNewGames = () => async (dispatch) => {
	try {
		dispatch({ type: 'FETCH_NEW_GAMES_REQUEST' });
		const newData = await axios.get(newGamesUrl());
		dispatch({
			type: 'FETCH_NEW_GAMES_SUCCESS',
			payload: newData.data.results,
		});
	} catch (error) {
		dispatch({
			type: 'FETCH_NEW_GAMES_FAILED',
			payload: error.message,
		});
	}
};

export const loadSearchGame = (game_name) => async (dispatch) => {
	try {
		const searchData = await axios.get(searchGameUrl(game_name));
		dispatch({ type: 'FERCH_GAME_SEARCH', payload: searchData.data.results });
	} catch (error) {
		console.error(error.message);
	}
};
