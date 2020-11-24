import axios from 'axios';
import { gameDetailsUrl, gameScreenshotsUrl } from '../../api';

export const loadDetailsGame = (gameId) => async (dispatch) => {
	try {
		const detailsData = await axios.get(gameDetailsUrl(gameId));
		const screenData = await axios.get(gameScreenshotsUrl(gameId));

		dispatch({ type: 'FETCH_DETAILS_GAME_REQUEST' });

		dispatch({
			type: 'FETCH_DETAILS_GAME',
			payload: {
				detail: detailsData.data,
				screen: screenData.data,
			},
		});
	} catch (error) {
		console.error(error.message);
	}
};
