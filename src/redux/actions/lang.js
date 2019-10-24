import * as types from './types';

export const setCurrentLang = lang  => {
    localStorage.setItem('lang', lang);
    return{ type: types.SET_CURRENT_LANG, lang: lang };
}

export const getCurrentLang = ()  => {
    console.log("hello from actions")
    return { type: types.GET_CURRENT_LANG };
};