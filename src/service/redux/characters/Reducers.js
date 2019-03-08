import * as ActionTypes from './ActionTypes'

const initialState = {
    characters: [],
    error: '',
    fetching: false,
}

export const Characters = (state = initialState, { type, payload }) => {
    switch (type) {

        case ActionTypes.CHARACTERS_REQUEST:
            return { ...state, fetching: true, error: '' }

        case ActionTypes.CHARACTERS_SUCCESS:
            return { ...state, ...initialState, characters: payload.characters }

        case ActionTypes.CHARACTERS_ERROR:
            return { ...state, error: payload.error, fetching: true }

        default:
            return state
    }
}
