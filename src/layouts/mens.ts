interface menuItem {
    key: string;
    label: string;
    children?: menuItem[];
}
const menus: menuItem[] = [
    {
        key: "home",
        label: "首页",
    },
    {
        key: "coms",
        label: "组件",
    },
];

export default menus