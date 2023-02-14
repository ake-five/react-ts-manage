interface routeInterface {
    path: string;
    component: any;
    routes?: Array<any>;
}

export type RouteInterface = routeInterface;

interface treeDataItem {
    title: string;
    value: string;
    key: string;
    children?: TreeDataItem[];
}
export type TreeDataItem = treeDataItem;
