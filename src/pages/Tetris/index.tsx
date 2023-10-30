
import React, { useState } from "react";
import dataJson from './data.json'
import DataTable from "@/components/DataTable";
import type { ColumnsType } from 'antd/es/table';

interface Indicator {
    indicatorId: string;
    parentId: string | null;
    indicatorCode: string;
    indicatorName: string;
    indicatorType: string | null;
    level: string;
    labelFlag: string;
    showFlag: string | null;
    showStyle: string | null;
    showStyleLength: string | null;
    weight: string | null;
    children?: Indicator[];
    parentObj?: Indicator
    twoItem?: Object
    oneItem?: Object
}

function App() {
    const [dataConfig, setDataConfig] = useState<any>(null)
    const filterData = (dataConfig: any) => {
        setDataConfig(dataConfig)
    }
    const columns: ColumnsType<Indicator> = [
        {
            title: '一级指标',
            dataIndex: 'oneItem',
            render: (text, record: any) => {
                const [parent1Item] = record.parents
                return <span>
                    {parent1Item?.indicatorName}
                </span>
            },
            onCell: (_, index: any) => {
                return {
                    rowSpan: dataConfig.span1[index]
                }
            }
        },
        {
            title: '二级指标',
            dataIndex: 'oneItem',
            render: (text, record: any) => {
                const [_, parent2Item] = record.parents
                return <span>
                    {parent2Item?.indicatorName}
                </span>
            },
            onCell: (_, index: any) => {
                return {
                    rowSpan: dataConfig.span2[index]
                }
            }
        },
        {
            title: '三级指标',
            dataIndex: 'indicatorName',
        },
        {
            title: '权重',
            dataIndex: 'weight',
        },
    ];

    return (
        <div title="合并行">

            <DataTable columns={columns} data={dataJson.data} tableSpanNumber={2} filterDataConfig={filterData} />
        </div>
    );
}

export default App;