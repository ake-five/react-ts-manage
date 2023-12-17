export default [

    {
        path: "/layout/coms",
        component: () => import("@/pages/Coms"),
        meta: {
            title: "组件",
        },
    },
    {
        path: "/layout/routes",
        component: () => import("@/pages/Routers"),
        meta: {
            title: "路由列表",
        },
    },

    {
        path: "/layout/table",
        component: () => import("@/pages/Tetris"),
        meta: {
            title: "table合并",
        },
    },

    {
        path: "/layout/searcList",
        component: () => import("@/pages/SearcList"),
        meta: {
            title: "列表模糊搜索",
        },
    },
];
