export interface routeType {
    path: string;
    component?: any;
    children?: Array<routeType>;
    meta: {
        title: string;
        needLogin?: boolean;
    };
    hidden?: boolean;
    redirect?: string;
}
import RouteMenus from "./routeMenu";
const routes: Array<routeType> = [
    {
        path: "/",
        component: () => import("@/layouts/layout"),
        meta: {
            title: "Layout组件",
        },
        children: [
            {
                path: "/",
                redirect: "/layout/home",
                hidden: true,
                meta: {
                    title: "重定向到首页",
                },
            },
            ...RouteMenus,
        ],
    },
    {
        path: "/react-ts-manage/login",
        component: () => import("@/pages/Login"),
        meta: {
            title: "登录页",
        },
    },
];

export default routes;
