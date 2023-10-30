
import { useEffect, useState } from 'react';
import React from 'react';
import { Table } from 'antd';
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
  parents?: any
}
interface Iprops {
  data: Indicator[]
  tableSpanNumber: number
  filterDataConfig: (dataConfig: any) => void
  columns: ColumnsType<Indicator>
}
interface Config {
  (itm: Indicator, idx: number, data: Indicator[], spanIndex: number): boolean,
}
interface FunctionWithNumberArray {
  (rulesFun: (itm: Indicator, idx: number, data: Indicator[], spanIndex: number) => boolean, spanIndex: number): number[];
}

function table(props: Iprops) {
  const [dataConfig, setDataConfig] = useState<any>(null)

  const spansFilter: FunctionWithNumberArray = (rulesFun: Config, spanIndex: number) => {
    let pos = 0
    const spanArr: number[] = []
    const data = findLastLevelWithParents(props.data) || []
    data.forEach((itm, idx) => {
      if (idx === 0) {
        spanArr.push(1)
        return
      }

      if (rulesFun(itm, idx, data, spanIndex)) {
        spanArr[pos] = spanArr[pos] + 1
        spanArr.push(0)
        return
      }
      spanArr.push(1)
      pos = spanArr.length - 1
    })
    return spanArr
  }
  function findLastLevelWithParents(data: Indicator[]) {
    let result: Indicator[] = [];

    function findLastLevel(node: Indicator, parents: Indicator[]) {
      if (node.children && node.children.length > 0) {
        node.children.forEach((child) => {
          findLastLevel(child, parents.concat(node));
        });
      } else {
        result.push({ ...node, parents });
      }
    }

    data.forEach((item) => {
      findLastLevel(item, []);
    });

    return result;
  }
  const filterdataConfig = () => {
    const rule = (itm: any, idx: number, data: Indicator[], spanIndex: number) => {

      const parents = itm.parents
      const sParents = data[idx - 1].parents
      if (spanIndex < props.tableSpanNumber) {
        return (parents[spanIndex] as any)?.parentId === sParents[spanIndex - 1]?.indicatorId
      }
      return itm.parentId === sParents[sParents.length - 1]?.indicatorId
    }

    const spansObj = {}
    for (let index = 1; index <= props.tableSpanNumber; index++) {
      const spanIndex = index
      Object.assign(spansObj, { [`span${spanIndex}`]: spansFilter(rule, spanIndex) })
    }
    setDataConfig(spansObj)
    props.filterDataConfig(spansObj)
  }
  useEffect(() => {
    filterdataConfig()
  }, [])


  return <div>
    {dataConfig && <Table pagination={false} rowKey={(record) => record.indicatorId} columns={props.columns} dataSource={findLastLevelWithParents(props.data)} bordered />}
  </div>
}

export default table;