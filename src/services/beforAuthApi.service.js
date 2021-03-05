import axios from "axios";

class BeforAuthApiService {
  constructor() {
    this.apiPrefixUrl = "/auth/";
  }
  get(apiUrl, endpoint) {
    return axios.get(apiUrl + this.apiPrefixUrl + endpoint);
  }
  post(apiUrl, endpoint, body = {}) {
    console.log(apiUrl + this.apiPrefixUrl + endpoint);
    return axios.post(apiUrl + this.apiPrefixUrl + endpoint, body);
  }
}

export default new BeforAuthApiService();
