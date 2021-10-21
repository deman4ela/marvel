import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_HEROES }  from '../types';
import { fetchHeroes, fetchHeroesSuccess, fetchHeroesError, showLoaderHeroes, hideLoaderHeroes } from '../actions';
import { getHeroes, getAPIResource, getAllHeroes } from '../../api/api';

export default function* heroesSagaWatcher() {
  yield takeEvery(FETCH_HEROES, heroesSagaWorker);
}

function* heroesSagaWorker(action: any): any {
  try {
    yield put(showLoaderHeroes());
    const payload = yield call(getHeroes, action.payload);
    yield put(fetchHeroesSuccess(payload));
    yield put(hideLoaderHeroes());
  } catch (error: any) {
    yield put(fetchHeroesError(error.message));
  }
}
