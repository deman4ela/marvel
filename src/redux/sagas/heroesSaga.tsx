import { AxiosResponse } from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchHeroes, IfetchHeroes, fetchHeroesSuccess, fetchHeroesError, IfetchHeroesSuccess, IfetchHeroesError, HeroesActions } from '../actions';
import { getHeroes, getAPIResource, getAllHeroes } from '../../api/api';
import { HeroesActionsTypes }  from '../types';
import { IHero } from '../../interfaces';

export default function* heroesSagaWatcher(): Generator {
  yield takeEvery(HeroesActionsTypes.FETCH_HEROES, heroesSagaWorker);
}

function* heroesSagaWorker(action: IfetchHeroes): Generator {
  try {
    const payload = yield call(getHeroes, action.payload);
    yield put(fetchHeroesSuccess(payload as Array<IHero>));
  } catch (error: any) {
    yield put(fetchHeroesError(error.message));
  }
}
