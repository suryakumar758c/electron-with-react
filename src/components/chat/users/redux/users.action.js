import ApiService from "../../../../services/api.service";

class UsersAction {
  static GET_USERS = "GET_USERS";

  static getUsers() {
    return async (dispatch) => {
      try {
        const result = await ApiService.get("get-users");
        console.log(result);
        dispatch({
          type: UsersAction.GET_USERS,
          payload: result,
        });
      } catch (error) {
        console.error("users exception", error);
      }
    };
  }
}

export default UsersAction;
