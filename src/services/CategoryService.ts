import BaseService from "./BaseService";

class CategoryService extends BaseService {
  fetchCategories = (): any => {
    return this.get(BaseService.getApiEndPointUrl(`/categories`)).then(
      (res: any) => res.data
    );
  };
}

const categoryService = new CategoryService();
export default categoryService;
