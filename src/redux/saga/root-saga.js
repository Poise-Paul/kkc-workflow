import {all } from 'redux-saga/effects';
import {UiSagas} from '../saga/combine-saga'


export default function* RootSaga(dispatch) {
  yield all([
    ...UiSagas
  ]);
}