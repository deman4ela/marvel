import { FETCH_HEROES, FETCH_HEROES_SUCCESS, FETCH_HEROES_ERROR, FETCH_COMICS_SUCCESS, FETCH_COMICS_ERROR, SHOW_LOADER_COMICS, HIDE_LOADER_COMICS }  from '../types';

const defaultComicsState = {
  fetchedComicsSuccess: [],
  fetchedComicsError: '',

  loaderForComics: false
};

const comicsReducer = (state = defaultComicsState, action: any) => {
  switch (action.type) {
    case FETCH_COMICS_SUCCESS:
      return { ...state, fetchedComicsSuccess: action.payload };

    case FETCH_COMICS_ERROR:
      return { ...state, fetchedComicsError: action.payload };

    case SHOW_LOADER_COMICS:
      return { ...state, loaderForComics: true };

    case HIDE_LOADER_COMICS:
      return { ...state, loaderForComics: false };

    default:
      return state;

  }
};

export default comicsReducer;
