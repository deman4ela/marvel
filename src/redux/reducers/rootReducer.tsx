import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import comicsReducer from './comicsReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  comics: comicsReducer
});

export default rootReducer;
