import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import Dashboard from "./views/dashboard/Dashboard";
import Layout from "./layout/Layout";
import Products from "./views/products/Products";
import { useSelector } from "react-redux";
import Users from "./views/users/Users";
import ProductCreate from "./views/products/ProductCreat";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ProductRead from "./views/products/ProductRead";
import ProductEdit from "./views/products/ProductEdit";

function App() {
  const {
    auth: { isAuth },
  } = useSelector((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {isAuth ? (
        <>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/create" element={<ProductCreate />} />
            <Route path="/products/read/:id" element={<ProductRead />} />
            <Route path="/products/edit/:id" element={<ProductEdit />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
        </>
      )}
    </Routes>
  );
}

export default App;
