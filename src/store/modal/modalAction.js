export const USER_SHOW = "USER_SHOW";
export const USER_CLOSE = "USER_CLOSE";
export const showUsers = (show) => {
  return {
    type: USER_SHOW,
    payload: show,
  };
};

export const modalClose = (show) => {
  return {
    type: USER_CLOSE,
    payload: show,
  };
};
