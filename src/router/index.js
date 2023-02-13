import Home from "../pages/Home/list";
import Login from "../pages/Login";
const routes = [
    {
        path: "overview",
        component: <Home />,
        children: [],
    },
    {
        path: "login",
        component: <Login />,
    },
];
export default routes;
