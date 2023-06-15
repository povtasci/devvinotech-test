import { CATEGORY_ACTIONS } from "../sagas/category/categoryActions";

export interface Category {
  id: number;
  name: string;
}

export interface CategoryState {
  list: Category[];
  inProgress: { [key: string]: boolean };
}

const defaultState = {
  list: [],
  inProgress: {
    fetchCategories: false,
  },
};

const ACTION_HANDLERS = {
  [CATEGORY_ACTIONS.FETCH_CATEGORIES]: (state: CategoryState) => {
    return {
      ...state,
      inProgress: {
        ...state.inProgress,
        fetchCategories: true,
      },
    };
  },
  [CATEGORY_ACTIONS.FETCH_CATEGORIES_SUCCESS]: (
    state: CategoryState,
    action: { data: Category[] }
  ) => {
    return {
      ...state,
      list: action.data,
      inProgress: {
        ...state.inProgress,
        fetchCategories: false,
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
