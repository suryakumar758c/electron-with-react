import BeforAuthApiService from "./beforAuthApi.service";
import AfterAuthApiService from "./afterAuthApi.service";
import LocalStorageService from "./localStorage.service";

class ApiService {
  constructor() {
    this.apiUrl = "http://localhost:8000/api";
    this.userToken = LocalStorageService.getAuthToken();
  }
  async get(endpoint) {
    return (
      await (!this.userToken
        ? BeforAuthApiService.get(this.apiUrl, endpoint)
        : AfterAuthApiService.get(this.apiUrl, endpoint))
    ).data;
  }
  async post(endpoint, body = {}) {
    return (
      await (!this.userToken
        ? BeforAuthApiService.post(this.apiUrl, endpoint, body)
        : AfterAuthApiService.post(this.apiUrl, endpoint, body))
    ).data;
  }
}

export default new ApiService();
