import React, { useState } from "react";
import { TreeSelect, Divider, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
const { SHOW_ALL, SHOW_PARENT } = TreeSelect;
interface treeDataItem {
    title: string;
    value: string;
    key: string;
    children?: treeDataItem[];
}
interface Iprops {
    treeData: treeDataItem[];
    placeholderTitle?: string;
    onChangeIds?: (newValue: string[]) => void;
    deaultValue?: string[];
    isCheckAll?: boolean;
    treeCheckStrictly?: boolean;
}
const arrMethod = (arr: treeDataItem[]): string[] => {
    if (!arr.length) return [];
    return arr.reduce(
        (pre: any, cur: any) =>
            Array.isArray(cur) ? [...pre, ...arrMethod(cur)] : [...pre, cur],
        []
    );
};

const filterTreeDataKeys = (data: treeDataItem[]): string[] => {
    return arrMethod(
        data.map((item: any) => {
            if (item.children) {
                return [item.key, ...filterTreeDataKeys(item.children)];
            }
            return item.key;
        })
    );
};

const TreeSelectCom: React.FC<Iprops> = (props) => {
    const {
        treeData,
        placeholderTitle = "Please select",
        onChangeIds = () => {},
        deaultValue = [],
        isCheckAll = false,
        treeCheckStrictly = false,
    } = props;
    const [value, setValue] = useState<string[]>(deaultValue);
    const [checked, setChecked] = useState<boolean>(false);
    const onChange = (newValue: string[]) => {
        setChecked(newValue.length === filterTreeDataKeys(treeData).length);
        setValue(newValue);
        onChangeIds(newValue.map((i: any) => i.value));
    };
    const onChangeCheck = (e: CheckboxChangeEvent) => {
        setChecked(e.target.checked);
        if (!e.target.checked) {
            setValue([]);
            onChangeIds([]);
        } else {
            setValue(filterTreeDataKeys(treeData));
            onChangeIds(filterTreeDataKeys(treeData));
        }
    };
    const tProps = {
        treeData,
        value,
        onChange,
        treeCheckable: true,
        showCheckedStrategy: treeCheckStrictly ? SHOW_ALL : SHOW_PARENT,
        placeholder: placeholderTitle,
        treeCheckStrictly,
        style: {
            width: "100%",
        },
        dropdownRender: (menu:any) => {
            return (
                <div>
                    {isCheckAll ? (
                        <div>
                            <Checkbox
                                style={{ padding: "16px 16px 0 23px" }}
                                onChange={onChangeCheck}
                                checked={checked}
                            >
                                全选
                            </Checkbox>
                            <Divider style={{ margin: "10px 0" }} />
                        </div>
                    ) : null}

                    {menu}
                </div>
            );
        },
    };

    return <TreeSelect {...tProps} />;
};

export default TreeSelectCom;
