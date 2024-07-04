import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  //   const navigate = useNavigate();
  //   const dataMenu = [
  //     { key: "1", icon: <UserOutlined />, label: "Dashboard", link: "/dashboard" },
  //     { key: "2", icon: <VideoCameraOutlined />, label: "Products", link: "/products" },
  //     { key: "3", icon: <UploadOutlined />, label: "Users", link: "/users" },
  //   ];
  //   const handleLink = (e) => {
  //     navigate(e.item.props.link);
  //   };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <h1>Logo</h1>

        <div>
          <Link to="/dashboard">
            <UserOutlined /> Dashboar
          </Link>
          <br />
          <Link to="/products">
            <VideoCameraOutlined /> Products
          </Link>
          <br />
          <Link to="/users">
            <UploadOutlined /> Users
          </Link>
        </div>
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} onSelect={handleLink} items={dataMenu} /> */}
      </Sider>
      <Layout>
        <Header>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content>
          <div style={{ padding: "1rem", background: "white", height: "100vh" }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
