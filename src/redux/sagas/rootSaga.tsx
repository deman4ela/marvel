import { all } from 'redux-saga/effects';
import heroesSagaWatcher from './heroesSaga';
import comicsSagaWatcher from './comicsSaga';

export default function* rootSaga(): Generator {
  yield all([
    heroesSagaWatcher(),
    comicsSagaWatcher()
  ]);
}
