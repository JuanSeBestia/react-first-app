import * as ActionTypes from './ActionTypes'

export const fetchCharacterSaga = () => ({
  type: ActionTypes.CHARACTERS_REQUEST
});

export const fetchedCharacterSuccess = (payload) => ({
  type: ActionTypes.CHARACTERS_SUCCESS,
  payload
});

export const fetchedCharacterError = (payload) => ({
  type: ActionTypes.CHARACTERS_ERROR,
  payload
})

