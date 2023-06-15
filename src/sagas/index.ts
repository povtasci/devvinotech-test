import { all, fork } from "redux-saga/effects";
import image from "./image/imageSaga";
import saga from "./category/categorySaga";
export default function* root() {
  yield all([fork(image)]);
  yield all([fork(saga)]);
}
