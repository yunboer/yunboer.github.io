import "./index.scss";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/blog");
  }
  return (
    <div className="home">
      <h1>这是一个欢迎页</h1>
      <p>探索、学习、创造</p>
      <button onClick={handleClick}>开始浏览</button>
      <div>随机跳转到一个博客</div>
    </div>
  );
}
