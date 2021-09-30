import {
    GET_CHARACTERS,
    GET_CHARACTER_DETAIL,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
} from '../actions/actionTypes';

const initialState = {
    // vamos a querer traer todos los personajes
    charactersAll: [],

    //queremos ver el detalle de un personaje
    characterDetail: [],

    //agregamos personaje favorito
    favoriteCharacters: [],
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                charactersAll: payload.results,
            };

        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: payload,
            };

        case ADD_FAVORITE:
            if(state.favoriteCharacters.find(character => character === payload)) return {...state}
            return {
                ...state,               
                favoriteCharacters: [
                    ...state.favoriteCharacters,
                    payload,
                    // state.charactersAll.filter((char) => char.id === payload)[0],
                ],
            };

        default:
            return state;
    }
}
