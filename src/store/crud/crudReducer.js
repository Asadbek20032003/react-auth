// import axios from "../../utils/http";
import { USER_POST, ERR, USER_GET, USER_DELETE, USER_READ, USER_PUT } from "./crudAction";
//import axios from "../../utils/http";
const initalState = {
  data: [],
  readProduct: [],
};

const reducer = (state = initalState, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_POST: {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }

    case USER_READ: {
      return {
        ...state,
        readProduct: payload,
      };
    }

    case USER_PUT: {
      return {
        ...state,
        readProduct: payload,
      };
    }
    case ERR: {
      return {
        ...state,
        data: [payload],
      };
    }

    case USER_GET: {
      return {
        ...state,
        data: payload,
      };
    }

    case USER_DELETE: {
      return {
        ...state,
        data: payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
