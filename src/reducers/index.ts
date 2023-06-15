import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  image: imageReducer,
  category: categoryReducer,
});

export default rootReducer;
