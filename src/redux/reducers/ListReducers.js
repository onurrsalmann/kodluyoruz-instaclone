import {LIST_START, LIST_SUCCESS, LIST_FAILD} from '../actions/types';

const INITIAL_STATE = {
  loadingCharacter: false,
  loadingAddItem: false,
  loadingRemoveItem: false,
  characters: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_START:
      return {
        ...state,
        loadingCharacter: true,
      };

    case LIST_SUCCESS:
      return {
        ...state,
        loadingCharacter: false,
        characters: action.payload.characters,
      };

    case LIST_FAILD:
      return {
        ...state,
        loadingCharacter: false,
      };

    default:
      return state;
  }
};
