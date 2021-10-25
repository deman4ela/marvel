import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_COMICS }  from '../types';
import { fetchComics, fetchComicsSuccess, fetchComicsError, hideLoaderComics } from '../actions';
import { getAllComicsOfHero, getAPIResource } from '../../api/api';

export default function* comicsSagaWatcher() {
  yield takeEvery(FETCH_COMICS, comicsSagaWorker);
}

function* comicsSagaWorker(action: any): any {
  try {
    const payload = yield call(getAllComicsOfHero, action.payload);
    yield put(fetchComicsSuccess(payload));
    yield put(hideLoaderComics());
  } catch (error: any) {
    yield put(fetchComicsError(error.message));
  }
}
