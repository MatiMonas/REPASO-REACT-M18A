import {
    GET_CHARACTER_DETAIL,
    GET_CHARACTERS,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
} from './actionTypes';

const URL_API = 'https://rickandmortyapi.com/api/character';

export function getCharacters() {
    return function (dispatch) {
        return fetch(URL_API)
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: GET_CHARACTERS,
                    payload: json,
                });
            });
    };
}
export function getCharactersDetail(id) {
    return function (dispatch) {
        return fetch(`${URL_API}/${id}`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: GET_CHARACTER_DETAIL,
                    payload: json,
                });
            });
    };
}

export function addFavorite(id) {
    return { 
        type: ADD_FAVORITE, 
        payload: id 
    };
}

export function removeFavorite(id) {
    return { 
        type: REMOVE_FAVORITE, 
        payload: id 
    };
}
