import { call, put, takeLatest } from "redux-saga/effects";
import { FetchImagesRequestParams, IMAGE_ACTIONS } from "./imageActions";
import imageService from "../../services/ImageService";
import { Image } from "../../reducers/imageReducer";
export default function* sagas() {
  // @ts-ignore
  yield takeLatest(IMAGE_ACTIONS.FETCH_IMAGES, fetchImages);
}

function* fetchImages({ payload }: { payload: FetchImagesRequestParams }) {
  try {
    yield put({ type: "GAME_LOADING", key: "getGameList" });
    const data: Image[] = yield call(imageService.fetchImages, { ...payload });
    yield put({
      type: IMAGE_ACTIONS.FETCH_IMAGES_SUCCESS,
      data,
      page: payload.page,
    });
  } catch (error) {
    // handle errors
  }
}
