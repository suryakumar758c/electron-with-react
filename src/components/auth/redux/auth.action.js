import ApiService from "../../../services/api.service";

class AuthAction {
  static Auth = "Auth";
  static login(payload) {
    return async (dispatch) => {
      try {
        const result = await ApiService.post("", payload);
        dispatch({
          type: AuthAction.Auth,
          payload: result.data,
        });
      } catch (error) {
        console.error("auth error", error);
      }
    };
  }
}

export default AuthAction;
