import BaseService from "./BaseService";
import { FetchImagesRequestParams } from "../sagas/image/imageActions";

class ImageService extends BaseService {
  fetchImages = (params: FetchImagesRequestParams): any => {
    // @ts-ignore
    const queryParams = new URLSearchParams(params).toString();
    return this.get(
      BaseService.getApiEndPointUrl(`/images/search?${queryParams}`)
    ).then((res: any) => res.data);
  };
}

const imageService = new ImageService();
export default imageService;
