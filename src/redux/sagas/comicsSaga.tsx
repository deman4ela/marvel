import { AxiosResponse } from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchComics, IfetchComics, fetchComicsSuccess, fetchComicsError } from '../actions';
import { ComicsActionsTypes }  from '../types';
import { getAllComicsOfHero, getAPIResource } from '../../api/api';
import { IComic, IHero } from '../../interfaces';

export default function* comicsSagaWatcher(): Generator {
  yield takeEvery(ComicsActionsTypes.FETCH_COMICS, comicsSagaWorker);
}

function* comicsSagaWorker(action: IfetchComics): Generator {
  try {
    const payload = yield call(getAllComicsOfHero, action.payload);
    yield put(fetchComicsSuccess(payload as Array<IComic>));
  } catch (error: any) {
    yield put(fetchComicsError(error.message));
  }
}
