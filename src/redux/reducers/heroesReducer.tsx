import { FETCH_HEROES, FETCH_HEROES_SUCCESS, FETCH_HEROES_ERROR, SHOW_LOADER_HEROES, HIDE_LOADER_HEROES }  from '../types';

const defaultHeroesState = {
  fetchedHeroesSuccess: [],
  fetchedHeroesError: '',

  loaderWorksHeroes: false
};

const heroesReducer = (state = defaultHeroesState, action: any) => {
  switch (action.type) {
    case FETCH_HEROES_SUCCESS:
      return { ...state, fetchedHeroesSuccess: action.payload,  fetchedHeroesError: '' };

    case FETCH_HEROES_ERROR:
      return { ...state, fetchedHeroesError: action.payload };

    case SHOW_LOADER_HEROES:
      return { ...state, loaderWorksHeroes: true };

    case HIDE_LOADER_HEROES:
      return { ...state, loaderWorksHeroes: false };

    default:
      return state;

  }
};

export default heroesReducer;
