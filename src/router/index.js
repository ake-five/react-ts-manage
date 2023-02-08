import Home from "../pages/Home/list";

const routes = [
    {
        path: "home",
        component: <Home />,
        children: [
            {
                index: true,
                redirect: "home",
            },
            { path: "overview", component: <Home /> },
        ],
    },
];
export default routes;
