import { FETCH_HEROES, FETCH_HEROES_SUCCESS, FETCH_HEROES_ERROR, HIDE_LOADER_HEROES }  from '../types';

const defaultHeroesState = {
  fetchedHeroesSuccess: [],
  fetchedHeroesError: '',

  loaderForHeroes: false
};

const heroesReducer = (state = defaultHeroesState, action: any) => {
  switch (action.type) {
    case FETCH_HEROES:
      return { ...state, loaderForHeroes: true };

    case FETCH_HEROES_SUCCESS:
      return { ...state, fetchedHeroesSuccess: action.payload,  fetchedHeroesError: '' };

    case FETCH_HEROES_ERROR:
      return { ...state, fetchedHeroesError: action.payload };

    case HIDE_LOADER_HEROES:
      return { ...state, loaderForHeroes: false };

    default:
      return state;

  }
};

export default heroesReducer;
