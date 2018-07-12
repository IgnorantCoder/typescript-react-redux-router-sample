import { RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';

export type RootState = {
    router: RouterState,
};

export const rootReducer = combineReducers({
} as any);
