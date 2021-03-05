class LocalStorageService {
  constructor() {
    this.authTokenKey = "electron-app-auth-key";
  }

  getAuthToken() {
    return localStorage.getItem(this.authTokenKey);
  }

  setAuthToken(value) {
    return localStorage.setItem(this.authTokenKey, value);
  }

  removeAuthToken() {
    return localStorage.removeItem(this.authTokenKey);
  }
}

export default new LocalStorageService();
