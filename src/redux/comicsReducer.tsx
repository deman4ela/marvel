import { FETCH_HEROES, SET_HEROES, SET_HEROES_ERROR, SET_COMICS, SET_COMICS_ERROR, SHOW_LOADER, HIDE_LOADER }  from './types';

const defaultComicsState = {
  fetchedComics: [],
  fetchedComicsError: '',

  loaderWorksComics: true
};

const comicsReducer = (state = defaultComicsState, action: any) => {
  switch (action.type) {
    case SET_COMICS:
      return { ...state, fetchedComics: action.payload };

    case SET_COMICS_ERROR:
      return { ...state, fetchedComicsError: action.payload };

    case SHOW_LOADER:
      return { ...state, loaderWorksComics: true };

    case HIDE_LOADER:
      return { ...state, loaderWorksComics: false };

    default:
      return state;

  }
};

export default comicsReducer;
