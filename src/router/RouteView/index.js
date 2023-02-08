import { Route, Navigate } from "react-router-dom";
function renderRouter(router, index) {
    console.log(router, index);
    // 如果遇到子路由，则调用自身的函数遍历子路由
    if (router.children) {
        return (
            <Route
                path={router.path}
                element={router.component}
                key={router.path}
            >
                {router.children.map((item) => renderRouter(item, index))}
            </Route>
        );
    }
    // 如果遇到重定向，使用<Navigate to='' />直接跳转
    return (
        <Route
            key={router.path}
            path={router.path}
            element={
                router.navigate ? (
                    <Navigate to={router.redirect} />
                ) : (
                    router.component
                )
            }
            index={router.navigate}
        />
    );
}
export default function RouterView(routes) {
    const ROUTE = routes.map((router, index) => renderRouter(router, index));
    return ROUTE;
}
