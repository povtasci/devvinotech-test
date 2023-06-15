import { IMAGE_ACTIONS } from "../sagas/image/imageActions";
import { Category } from "./categoryReducer";

export interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface ImageState {
  list: Image[];
  page: number;
  inProgress: { [key: string]: boolean };
}

const defaultState = {
  list: [],
  page: 1,
  inProgress: {
    fetchImages: false,
  },
};

const ACTION_HANDLERS = {
  [IMAGE_ACTIONS.FETCH_IMAGES]: (state: ImageState) => {
    return {
      ...state,
      inProgress: {
        ...state.inProgress,
        fetchImages: true,
      },
    };
  },
  [IMAGE_ACTIONS.FETCH_IMAGES_SUCCESS]: (
    state: ImageState,
    action: { data: Category[]; page: number }
  ) => {
    return {
      ...state,
      list: action.page === 1 ? action.data : [...state.list, ...action.data],
      page: action.page,
      inProgress: {
        ...state.inProgress,
        fetchImages: false,
      },
    };
  },
};

const reducer = (
  state = defaultState,
  action: { type: string; payload?: any }
) => {
  const handler = ACTION_HANDLERS[action.type];
  // @ts-ignore
  return handler ? handler(state, action) : state;
};

export default reducer;
