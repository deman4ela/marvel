import { ComicsActions } from '../actions';
import { ComicsActionsTypes } from '../types';
import { IComic } from '../../interfaces';

export interface IComicsState {
  fetchedComicsSuccess: Array<IComic>;
  fetchedComicsError: string;
  loaderForComics: boolean;
}

const defaultComicsState = {
  fetchedComicsSuccess: [],
  fetchedComicsError: '',
  loaderForComics: false
};

const comicsReducer = (state: IComicsState = defaultComicsState, action: ComicsActions): IComicsState => {
  switch (action.type) {
    case ComicsActionsTypes.FETCH_COMICS:
      return { ...state, loaderForComics: true };

    case ComicsActionsTypes.FETCH_COMICS_SUCCESS:
      return { ...state, fetchedComicsSuccess: action.payload, loaderForComics: false };

    case ComicsActionsTypes.FETCH_COMICS_ERROR:
      return { ...state, fetchedComicsError: action.payload, loaderForComics: false };

    default:
      return state;

  }
};

export default comicsReducer;
