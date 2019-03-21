
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../rootReducer';



export function configureStore(initialState?: any) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(ReduxThunk)
    );
}