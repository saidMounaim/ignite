import { combineReducers } from "redux";
import { gameReducers } from "./gameReducers";

const rootReducers = combineReducers({
    game: gameReducers
})

export default rootReducers;