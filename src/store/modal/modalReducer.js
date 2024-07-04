import { USER_SHOW, USER_CLOSE } from "./modalAction";

const initalState = {
  show: false,
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_SHOW:
      return {
        ...state,
        show: true,
      };
    case USER_CLOSE:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default reducer;
