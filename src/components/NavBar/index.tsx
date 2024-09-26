import { NavLink } from "react-router-dom";
import "./index.scss";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/registry">Registry</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
}
