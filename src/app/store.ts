import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import saga from "../sagas/index";
import { ImageState } from "../reducers/imageReducer";
import { CategoryState } from "../reducers/categoryReducer";
export interface GlobalState {
  image: ImageState;
  category: CategoryState;
}
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
