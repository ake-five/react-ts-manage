import Home from "../pages/Layout";
import Login from "../pages/Login";
import Coms from "../pages/Coms";
const routes = [
    {
        path: "/",
        navigate: true,
        redirect: "overview/coms",
    },

    {
        path: "overview",
        component: <Home />,
        children: [
            {
                navigate: true,
                redirect: "overview/coms",
            },
            {
                path: "coms",
                component: <Coms />,
            },
        ],
    },
    {
        path: "login",
        component: <Login />,
    },
];
export default routes;
