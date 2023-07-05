import { applyMiddleware , createStore , combineReducers } from "redux";
import thunk from "redux-thunk"
import { userReducer } from "./reducers/userRed";
import { favoriteReducer } from "./reducers/favorites";

const rootReducer = combineReducers({
    usData: userReducer,
    favReducer: favoriteReducer

});

export const store = createStore(rootReducer,applyMiddleware(thunk))