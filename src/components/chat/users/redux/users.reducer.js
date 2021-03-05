import UsersAction from "./users.action";

const initialState = {
  status: 404,
  message: "",
  data: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UsersAction.GET_USERS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
