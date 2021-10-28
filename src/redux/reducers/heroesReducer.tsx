import { HeroesActions } from '../actions';
import { HeroesActionsTypes } from '../types';
import { IHero } from '../../interfaces';

export interface IHeroesState {
  fetchedHeroesSuccess: Array<IHero>;
  fetchedHeroesError: string;
  loaderForHeroes: boolean;
}

const defaultHeroesState = {
  fetchedHeroesSuccess: [],
  fetchedHeroesError: '',
  loaderForHeroes: false
};

const heroesReducer = (state: IHeroesState = defaultHeroesState, action: HeroesActions): IHeroesState => {
  switch (action.type) {
    case HeroesActionsTypes.FETCH_HEROES:
      return { ...state, loaderForHeroes: true };

    case HeroesActionsTypes.FETCH_HEROES_SUCCESS:
      return { ...state, fetchedHeroesSuccess: action.payload,  fetchedHeroesError: '', loaderForHeroes: false };

    case HeroesActionsTypes.FETCH_HEROES_ERROR:
      return { ...state, fetchedHeroesError: action.payload, loaderForHeroes: false };

    default:
      return state;

  }
};

export default heroesReducer;
