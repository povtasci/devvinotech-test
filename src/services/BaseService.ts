import axios from "axios";

class BaseService {
  static getEnv(): string | undefined {
    return process.env.NODE_ENV;
  }
  static getApiUrl(): string | undefined {
    return process.env.REACT_APP_API_URL;
  }
  static getApiEndPointUrl(uri: string, version = "v1"): string {
    return `${BaseService.getApiUrl()}${version}${uri}`;
  }

  get(url: string): Promise<any> {
    return axios.get(url);
  }
}

export default BaseService;
