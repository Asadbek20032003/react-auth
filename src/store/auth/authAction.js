export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const logIn = (data) => {
  localStorage.setItem("auth", JSON.stringify(data));
  return {
    type: LOGIN,
    payload: data,
  };
};

export const logOut = () => {
  localStorage.removeItem("auth");
  return {
    type: LOGOUT,
  };
};
