import { takeLatest, put, delay} from 'redux-saga/effects';

function* ageUpAsync(){
  yield delay(5000);
  yield put({type: 'UP_ASYNC', value : 1 });
}

export function* watchAgeUp(){
  yield takeLatest('UP', ageUpAsync);
}