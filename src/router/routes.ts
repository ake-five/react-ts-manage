

export interface routeType {
    path: string
    component?: any
    children?: Array<routeType>
    meta?: {
        title?: string
        needLogin?: boolean
    }
    redirect?: string
}

const routes: Array<routeType> = [
    {
        path: '/',
        component: () => import('@/layouts/layout'),
        children: [
            {
                path: '/',
                redirect: '/home',
            },
            {
                path: '/home',
                component: () => import('@/pages/Coms'),
                meta: {
                    title: "首页",
                }
            },
            {
                path: '/coms',
                component: () => import('@/pages/Coms'),
                meta: {
                    title: "组件",
                }
            },
        ]
    }
]

export default routes;