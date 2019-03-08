import { takeLatest } from "redux-saga/effects";
import * as ActionTypes from './ActionTypes'
import { fetchCharacterSaga } from "./Sagas";

export default function* charactersSaga(){
    yield takeLatest(ActionTypes.CHARACTERS_REQUEST,fetchCharacterSaga)
}