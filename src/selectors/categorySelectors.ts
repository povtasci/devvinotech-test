import { GlobalState } from "../app/store";

export const getCategories = (state: GlobalState) => state.category.list;
export const isFetchingCategoriesInProgress = (state: GlobalState) =>
  state.category.inProgress.fetchCategories;
