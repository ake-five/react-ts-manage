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
                redirect: "/home",
                hidden: true,
                meta: {
                    title: "重定向到首页",
                },
            },
            {
                path: "/home",
                component: () => import("@/pages/Home"),
                meta: {
                    title: "首页",
                },
            },
            {
                path: "/coms",
                component: () => import("@/pages/Coms"),
                meta: {
                    title: "组件",
                },
            },
            {
                path: "/routes",
                component: () => import("@/pages/Routers"),
                meta: {
                    title: "路由列表",
                },
            },
            {
                path: "/funcom",
                component: () => import("@/pages/Funcom"),
                meta: {
                    title: "美团面试题记录",
                },
            },
        ],
    },
    {
        path: "/login",
        component: () => import("@/pages/Login"),
        meta: {
            title: "登录页",
        },
    },
];

export default routes;
