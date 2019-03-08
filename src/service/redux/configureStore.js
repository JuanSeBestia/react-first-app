import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import createSagaMiddleware from 'redux-saga'
import charactersSaga from './characters';
import { Characters } from './characters/Reducers'
// Use with Chrome extension
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            characters: Characters,
            ...createForms({
                feedback: InitialFeedback
            })
        }), composeWithDevTools(
            applyMiddleware(sagaMiddleware, thunk, logger)
        )
    );
    sagaMiddleware.run(charactersSaga);

    return store;
}