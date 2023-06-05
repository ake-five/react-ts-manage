export default [
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
        path: "/practice",
        component: () => import("@/pages/Practice"),
        meta: {
            title: "练习Flex",
        },
    },
    {
        path: "/funcom",
        component: () => import("@/pages/Funcom"),
        meta: {
            title: "美团面试题记录",
        },
    },
];
