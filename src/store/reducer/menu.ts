import menus from "@/router/routes";
export interface IMenus {
    menus: any;
    treeData: treeData[];
    loading: Boolean;
    defaultSelectedKeys: string[];
}
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
interface IState {
    menu: IMenus;
}
interface treeData {
    key: string;
    label: string;
    children?: Array<treeData> | Array<routeType>;
}
const initMenuState: IState = {
    menu: {
        menus: [],
        treeData: [],
        loading: false,
        defaultSelectedKeys: [],
    },
};

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
const filterData = (treeData: treeData[]): any => {
    return treeData.map((i) => {
        if (i.children) {
            return {
                key: i.key,
                title: i.label,
                children: i.children,
            };
        } else {
            return {
                key: i.key,
                title: i.label,
            };
        }
    });
};
export enum IMenuActionType {
    CHANGE,
    INIT,
    INITTREE,
    SETLOADING,
}
const menu = (
    state: IState = initMenuState,
    action: { type: IMenuActionType; payload: any }
) => {
    switch (action.type) {
        case IMenuActionType.CHANGE:
            return { ...state, ...action.payload };
        case IMenuActionType.INIT:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    menus: [...filterMenus((menus[0] as any).children)],
                },
            };
        case IMenuActionType.INITTREE:
            const treeData = [...filterData(state.menu.menus)];
            return {
                ...state,
                menu: {
                    ...state.menu,
                    treeData,
                    loading: false,
                    defaultSelectedKeys: [treeData[0]?.key],
                },
            };
        case IMenuActionType.SETLOADING:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    loading: action.payload.loading,
                },
            };
        default:
            return state;
    }
};
export default menu;
