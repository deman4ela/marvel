import { FETCH_HEROES, FETCH_HEROES_SUCCESS, FETCH_HEROES_ERROR, FETCH_COMICS,  FETCH_COMICS_SUCCESS, FETCH_COMICS_ERROR, HIDE_LOADER_COMICS }  from '../types';

const defaultComicsState = {
  fetchedComicsSuccess: [],
  fetchedComicsError: '',

  loaderForComics: false
};

const comicsReducer = (state = defaultComicsState, action: any) => {
  switch (action.type) {
    case FETCH_COMICS:
      return { ...state, loaderForComics: true };

    case FETCH_COMICS_SUCCESS:
      return { ...state, fetchedComicsSuccess: action.payload };

    case FETCH_COMICS_ERROR:
      return { ...state, fetchedComicsError: action.payload };

    case HIDE_LOADER_COMICS:
      return { ...state, loaderForComics: false };

    default:
      return state;

  }
};

export default comicsReducer;
