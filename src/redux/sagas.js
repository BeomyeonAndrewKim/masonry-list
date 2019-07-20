import { take, call, put, fork, delay } from 'redux-saga/effects';

import { GET_SIBA_IMAGES_REQUEST, succeedToGetSiba, handleLoading } from './actions';
import { getSibaImgApi } from './apis';

function* getSibaImagesSaga() {
  while (true) {
    const { resizeGridGap } = yield take(GET_SIBA_IMAGES_REQUEST);
    try {
      yield put(handleLoading({ isLoading: true }));
      const { data } = yield call(getSibaImgApi);
      if (!!data.length) {
        yield delay(500);
        yield put(succeedToGetSiba({ sibaImages: data }));
        yield put(handleLoading({ isLoading: false }));
        resizeGridGap();
      }
    } catch (error) {
      yield put(handleLoading({ isLoading: false }));
      console.log(error);
      alert('Error!');
    }
  }
}

export default function*() {
  yield fork(getSibaImagesSaga);
}
