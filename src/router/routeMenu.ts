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
            title: "打印组件",
        },
    },
    {
        path: "/table",
        component: () => import("@/pages/Tetris"),
        meta: {
            title: "table合并",
        },
    },
    {
        path: "/classroute",
        component: () => import("@/pages/ClassRoute"),
        meta: {
            title: "测试类组件跳转路由",
        },
    },
    {
        path: "/searcList",
        component: () => import("@/pages/SearcList"),
        meta: {
            title: "列表模糊搜索",
        },
    },
];
