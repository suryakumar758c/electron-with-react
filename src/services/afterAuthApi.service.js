import axios from "axios";
import LocalStorageService from "./localStorage.service";

class AfterAuthApiService {
  constructor() {
    this.apiPrefixUrl = "/user/";
    this.interceptor();
  }

  interceptor() {
    axios.interceptors.request.use(function (config) {
      config.headers.Authorization = LocalStorageService.getAuthToken();
      return config;
    });
  }

  get(apiUrl, endpoint) {
    return axios.get(apiUrl + this.apiPrefixUrl + endpoint);
  }
  post(apiUrl, endpoint, body = {}) {
    return axios.post(apiUrl + this.apiPrefixUrl + endpoint, body);
  }
}

export default new AfterAuthApiService();
