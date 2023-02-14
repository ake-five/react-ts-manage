import React from "react";
import { Col, Row } from "antd";
import DocumentTitle from "react-document-title";
import TreeSelect from "@/components/TreeSelect";
interface Iprops {}
const Coms: React.FC<Iprops> = () => {
    const treeData = [
        {
            title: "Node1",
            value: "0-0",
            key: "0-0",
            children: [
                {
                    title: "Child Node1",
                    value: "0-0-0",
                    key: "0-0-0",
                    children: [
                        {
                            title: "Child Node11",
                            value: "0-0-01",
                            key: "0-0-01",
                        },
                    ],
                },
            ],
        },
        {
            title: "Node2",
            value: "0-1",
            key: "0-1",
            children: [
                {
                    title: "Child Node3",
                    value: "0-1-0",
                    key: "0-1-0",
                },
                {
                    title: "Child Node4",
                    value: "0-1-1",
                    key: "0-1-1",
                },
                {
                    title: "Child Node5",
                    value: "0-1-2",
                    key: "0-1-2",
                },
            ],
        },
    ];
const onchange =(ids:string[])=>{
    console.log(ids)
}
    return (
        <DocumentTitle title="示例组件">
            <Row>
                <Col span={6}>
                    <TreeSelect
                        treeData={treeData}
                        isCheckAll
                        treeCheckStrictly
                        onChangeIds={onchange}
                        deaultValue={['0-0-0']}
                    />
                </Col>
            </Row>
        </DocumentTitle>
    );
};
export default Coms;
