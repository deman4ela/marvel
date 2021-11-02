import { combineReducers } from 'redux';
import heroesReducer, { IHeroesState } from './heroesReducer';
import comicsReducer, { IComicsState } from './comicsReducer';

export interface IRootState {
  heroes: IHeroesState;
  comics: IComicsState;
}

const rootReducer = combineReducers({
  heroes: heroesReducer,
  comics: comicsReducer
});

export default rootReducer;
