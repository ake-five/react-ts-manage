
import React from "react";
import dataJson from './data.json'
import DataTable from "@/components/DataTable";

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
    const filterData = (data: Indicator[]): any => {
        return data.map((oneItem: Indicator) => {
            return oneItem.children?.map((twoItem: Indicator) => {
                return twoItem.children?.map((thrreItem: Indicator) => {
                    if (!thrreItem.children?.length) delete thrreItem.children
                    return {
                        ...thrreItem,
                        twoItem,
                        oneItem,
                    }
                }).flat()
            }).flat()
        }).flat()
    }
    return (
        <div title="合并行">
            <DataTable data={filterData(dataJson.data)} />
        </div>
    );
}

export default App;