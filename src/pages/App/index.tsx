import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./index.scss";

// 根组件
function App() {
  return (
    <div className="app">
      <div className="head">
        <NavBar />
      </div>
      <div className="main">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
