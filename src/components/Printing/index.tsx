import React, { useCallback, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Table, Button } from "antd";
interface Iprops {
    columns: any;
    data?: any;
    children?: string;
    chunkSize?: number;
}
const Printing: React.FC<Iprops> = (props) => {
    const componentRef = useRef<any>();
    const [loading, setLoading] = useState<boolean>(false);
    function splitDataIntoArrays(data: any = []) {
        const chunkSize = props.chunkSize || 10;
        if (data.length < chunkSize) return data;
        const result = [];
        for (let i = 0; i < data.length; i += chunkSize) {
            const chunk = data.slice(i, i + chunkSize);
            result.push(
                chunk.map((item: any, index: number) => {
                    return { ...item, key: `${item.key || index}${index}` };
                })
            );
        }
        return result;
    }
    const dataAll: any = [splitDataIntoArrays(props.data)];
    const onClick = useCallback(() => {
        // 获取整个数据
        setLoading((prevloading) => true);
        if (componentRef.current) {
            componentRef.current.style.display = "block";
            handlePrint();
            componentRef.current.style.display = "none";
        }
        setLoading((prevloading) => false);
    }, []);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        printOptions: () => {
            return { documentTitle: "打印标题" };
        },
    });

    return (
        <div>
            <Button onClick={onClick} loading={loading}>
                {props.children || "打 印 按 钮"}
            </Button>

            <div ref={componentRef} style={{ display: "none" }}>
                {dataAll.map((item: any, index: number) => {
                    return (
                        <div key={index}>
                            <Table
                                columns={props.columns}
                                dataSource={item}
                                pagination={false}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Printing;
