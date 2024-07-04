import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

const token = JSON.parse(localStorage.getItem("auth"))?.token;

axios.interceptors.request.use(
  function (config) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { response } = error;
    const { status } = response;
    if (status === 401) {
      localStorage.removeItem("auth");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axios;
