import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';

export type RootState = {
    router: RouterState,
};

export const rootReducer = combineReducers({
    router: routerReducer,
});
