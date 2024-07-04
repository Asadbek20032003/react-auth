import { LOGIN, LOGOUT } from "./authAction";

const initalState = {
  isAuth: !!JSON.parse(localStorage.getItem("auth"))?.token,
  authData: JSON.parse(localStorage.getItem("auth")),
};

const reducer = (state = initalState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        isAuth: true,
        authData: payload,
      };
    }

    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        authData: null,
      };

    default:
      return state;
  }
};

export default reducer;
