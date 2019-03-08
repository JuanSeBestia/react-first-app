import api from '../../api/axios';
import { call, put } from 'redux-saga/effects';
import * as ActionCreators from './ActionCreators'


export function* fetchCharacterSaga(action) {
    try {
        const characters = yield call(api.characters.fecthAll)
        yield put(ActionCreators.fetchedCharacterSuccess({ characters: characters.characters }));
    } catch (error) {
        yield put(ActionCreators.fetchedCharacterError({ error: error.response }));
    }
}