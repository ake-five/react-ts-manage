interface routeType {
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
import menus from "@/router/routes";

const filterMenus = (meuns: routeType[]) => {
    return meuns
        .filter((i: routeType) => !i.hidden)
        .map((i) => {
            if (i.children) {
                return {
                    key: i.path?.replace("/", ""),
                    label: i.meta.title,
                    children: i.children,
                };
            } else {
                return {
                    key: i.path?.replace("/", ""),
                    label: i.meta.title,
                };
            }
        });
};

export default filterMenus((menus[0] as any).children);
