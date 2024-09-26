import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../pages/App";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Registry from "../pages/Registry";

const router = createBrowserRouter([{
    path: "/",
    element: <App></App>,
    children: [
        {
            path: "",
            element: <Home></Home>,
        },
        {
            path: "blog",
            element: <Blog></Blog>,
        },
        {
            path: "login",
            element: <Login></Login>,
        },
        {
            path: "registry",
            element: <Registry></Registry>,
        },

    ],
}]);

export default router;