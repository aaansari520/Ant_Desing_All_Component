import "./App.css";
import "antd/dist/antd.css";
import AppHeader from "./Components/common/header";
import { Layout } from "antd";

import AppHome from "./views/home";

const { Header, Content } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header style={{ backgroundColor: "#46e09b" }}>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}

export default App;
