import { call, put, takeLatest } from "redux-saga/effects";
import categoryService from "../../services/CategoryService";
import { CATEGORY_ACTIONS } from "./categoryActions";
import { Category } from "../../reducers/categoryReducer";
export default function* sagas() {
  yield takeLatest(CATEGORY_ACTIONS.FETCH_CATEGORIES, fetchCategories);
}

function* fetchCategories() {
  try {
    const data: Category[] = yield call(categoryService.fetchCategories);
    yield put({
      type: CATEGORY_ACTIONS.FETCH_CATEGORIES_SUCCESS,
      data,
    });
  } catch (error) {
    // handle errors
  }
}
