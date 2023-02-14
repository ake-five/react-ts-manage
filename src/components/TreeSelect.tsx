import React, { useState } from "react";
import { TreeSelect, Divider, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { TreeDataItem } from "@/assets/interface";
const { SHOW_ALL, SHOW_PARENT } = TreeSelect;
interface Iprops {
    treeData: TreeDataItem[];
    placeholderTitle?: string;
    onChangeIds?: (newValue: string[]) => void;
    deaultValue?: string[];
    isCheckAll?: boolean;
    treeCheckStrictly?: boolean;
}
const arrMethod = (arr) => {
    if (!arr.length) return;
    return arr.reduce(
        (pre, cur) =>
            Array.isArray(cur) ? [...pre, ...arrMethod(cur)] : [...pre, cur],
        []
    );
};

const filterTreeDataKeys = (data: TreeDataItem[]) => {
    return arrMethod(
        data.map((item: TreeDataItem) => {
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
        onChangeIds(newValue);
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
        dropdownRender: (menu) => {
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
