export const USER_POST = "USER_POST";
export const USER_READ = "USER_READ";
export const USER_PUT = "USER_PUT";
export const USER_DELETE = "USER_DELETE";
export const USER_CHANGE = "USER_CHANGE";
export const ERR = "ERR";
export const USER_GET = "USER_GET";

import axios from "../../utils/http";

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get("/products", {
        params: {
          skip: 0,
          limit: 10,
        },
      })
      .then((users) => {
        dispatch({ type: USER_GET, payload: users.data.products });
      })
      .catch((err) => {
        dispatch({ type: ERR, payload: alert(err.message) });
      });
  };
};
export const addUser = async (product) => {
  try {
    const res = await axios.post("/products/add", { product });
    return {
      type: USER_POST,
      payload: res.data,
    };
  } catch (err) {
    return { type: ERR, payload: alert(err.message) };
  }
};

export const readUsers = (id) => {
  return (dispatch) => {
    return axios
      .get("/products/" + id)
      .then((res) => dispatch({ type: USER_READ, payload: res.data }))
      .catch((err) => dispatch({ type: ERR, payload: alert(err.message) }));
  };
};

export const updateUsers = async (id, product) => {
  console.log("id", id);
  try {
    const res = await axios.put("/products/" + id, { product });
    return {
      type: USER_PUT,
      payload: res,
    };
  } catch (err) {
    return { type: ERR, payload: alert(err.message) };
  }
};

export const deleteUsers = async (id) => {
  console.log("id", id);
  try {
    const res = await axios.delete("/products/" + id);
    return {
      type: USER_DELETE,
      payload: res,
    };
  } catch (err) {
    return { type: ERR, payload: alert(err.message) };
  }

  // return (dispatch) => {
  //   return axios
  //     .delete("/products/" + id)
  //     .then((res) => dispatch({ type: USER_DELETE, payload: res }))
  //     .catch((err) => dispatch({ type: ERR, payload: alert(err.message) }));
  // };
};
