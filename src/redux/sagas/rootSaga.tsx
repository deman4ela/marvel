import { all } from 'redux-saga/effects';
import heroesSagaWatcher from './heroesSaga';
import comicsSagaWatcher from './comicsSaga';

export default function* rootSaga() {
  yield all([
    heroesSagaWatcher(),
    comicsSagaWatcher()
  ]);
}
