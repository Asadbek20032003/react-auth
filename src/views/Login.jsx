import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../utils/http";
import { logIn } from "../store/auth/authAction";
import "../assets/css/Login.css";

function Login() {
  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username: data.login,
      password: data.password,
      expiresInMins: 30,
    };

    axios
      .post("/auth/login", { ...formData })
      .then((res) => {
        dispatch(logIn(res.data));
        navigate("/dashboard");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="content">
        <form>
          <h1>Login Form</h1>
          <div className="form-inputs">
            {/* <div className="form-inputs"></div> */}
            <label htmlFor="login" className="from-label">
              <b>Username</b>
            </label>
            <input
              name="login"
              type="text"
              className="form-input"
              placeholder="Enter Username"
              value={data.login}
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="from-label">
              <b>Password</b>
            </label>
            <input
              name="password"
              type="password"
              className="form-input"
              placeholder="Enter Password"
              value={data.password}
              onChange={handleChange}
              required
            />
            <span className="password">
              Forgot <a href="#">password?</a>
            </span>
            <div className="submit">
              <button type="submit" className="LoGin" onClick={(e) => handleSubmit(e)}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
