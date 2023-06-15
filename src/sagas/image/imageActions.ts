export const IMAGE_ACTIONS = {
  FETCH_IMAGES: "FETCH_IMAGES",
  FETCH_IMAGES_SUCCESS: "FETCH_IMAGES_SUCCESS",
};

export interface FetchImagesRequestParams {
  limit: number;
  page: number;
  category_ids?: number;
}

export const fetchImages = (payload: FetchImagesRequestParams) => {
  return {
    type: IMAGE_ACTIONS.FETCH_IMAGES,
    payload,
  };
};
