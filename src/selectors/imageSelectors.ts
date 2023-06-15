import { GlobalState } from "../app/store";

export const getImages = (state: GlobalState) => state.image.list;
export const isFetchingImagesInProgress = (state: GlobalState) =>
  state.image.inProgress.fetchImages;
export const getImagePage = (state: GlobalState) => state.image.page;
