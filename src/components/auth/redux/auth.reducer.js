import AuthAction from "./auth.action";

const initialState = {
  token: "",
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case AuthAction.Auth:
      console.log(action.payload);
      return {
        token: action.payload.token,
      };
    default:
      return state;
  }
};
