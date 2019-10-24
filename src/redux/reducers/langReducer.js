import * as types from '../actions/types';

const initialState = {
    lang: localStorage.getItem('lang') || 'en'
};

export default function locale(state = initialState, action) {
    switch (action.type) {
        case types.SET_CURRENT_LANG:
            return {
                ...state,
                lang: action.lang
            };
        case types.GET_CURRENT_LANG:
            return state;
        default:
            return state;
    }
};