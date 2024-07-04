import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/auth/authAction";
import axios from "../../utils/http";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    axios
      .get("/auth/me")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [auth]);

  return (
    <div>
      Dashboard
      <div>
        <img src={user?.image} />
        <h1>{user?.firstName}</h1>
      </div>
      <button className="LoGin" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
