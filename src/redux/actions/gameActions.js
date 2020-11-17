import axios from 'axios';
import { popularGamesUrl } from '../../api'

export const loadPopularGames = () => async (dispatch) => {

    try {
        dispatch({ type: 'FETCH_GAMES_REQUEST' });
        const popularData = await axios.get(popularGamesUrl());
        dispatch({
            type: "FETCH_GAMES_SUCCESS",
            payload: popularData.data.results
        })
    } catch (error) {
        dispatch({
            type: "FETCH_GAMES_FAILED",
            payload: error.message
        })
    }

}