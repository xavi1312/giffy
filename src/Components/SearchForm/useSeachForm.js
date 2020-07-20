import { useReducer } from 'react';

export const useSeachForm = ({ initialKeyword = '', initialRaiting = 'g' }) => {
  const INITIAL_STATE = {
    keyword: initialKeyword,
    raiting: initialRaiting,
  };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return {
    keyword: state.keyword,
    raiting: state.raiting,
    updateKeyword: newKeyword =>
      dispatch({ type: ACTION.UPDATE_KEYWORD, payload: newKeyword }),
    updateRaiting: newRaiting =>
      dispatch({ type: ACTION.UPDATE_RAITING, payload: newRaiting }),
  };
};

const ACTION = {
  UPDATE_KEYWORD: 'UPDATE_KEYWORD',
  UPDATE_RAITING: 'UPDATE_RAITING',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.UPDATE_KEYWORD:
      return { ...state, keyword: action.payload };
    case ACTION.UPDATE_RAITING:
      return { ...state, raiting: action.payload };

    default:
      return state;
  }
}
