import { combineReducers } from 'redux';
import { gameReducers } from './reducers/gameReducers';
import { detailsReducers } from './reducers/detailsReducers';

const rootReducers = combineReducers({
	game: gameReducers,
	detail: detailsReducers,
});

export default rootReducers;
