import { combineReducers } from "redux";
import { gameReducers } from "./reducers/gameReducers";

const rootReducers = combineReducers({
    game: gameReducers
})

export default rootReducers;