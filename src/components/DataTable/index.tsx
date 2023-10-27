
import React from "react";
import { useEffect, useState } from 'react';
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
  parentObj?: Indicator
  twoItem?: Indicator
  oneItem?: Indicator
  onCell: any
}
interface Iprops {
  data: Indicator[]
}
interface Config {
  (itm: Indicator, idx: number, data: Indicator[]): boolean,
}
interface FunctionWithNumberArray {
  (rulesFun: (itm: Indicator, idx: number, data: Indicator[])=> boolean): number[];
}

function table(props: Iprops) {

  const spansFilter: FunctionWithNumberArray = (rulesFun: Config) => {
    let pos = 0
    const spanArr: number[] = []
    const data = props.data || []
    data.forEach((itm, idx) => {
      if (idx === 0) {
        spanArr.push(1)
        return
      }
      if (rulesFun(itm, idx, data)) {
        spanArr[pos] = spanArr[pos] + 1
        spanArr.push(0)
        return
      }
      spanArr.push(1)
      pos = spanArr.length - 1
    })
    return spanArr
  }
  const dataConfig = (() => {
    const oneRule = (itm: Indicator, idx: number, data: Indicator[]) => {
      return (itm?.twoItem as any).parentId === (data[idx - 1] as any)?.oneItem.indicatorId
    }
    const towRule = (itm: Indicator, idx: number, data: Indicator[]) => {
      return itm.parentId === (data[idx - 1] as any)?.twoItem.indicatorId
    }
    return {
      onespan: spansFilter(oneRule),
      towspan: spansFilter(towRule)
    }
  })()
  const columns: ColumnsType<Indicator> = [
    {
      title: '一级指标',
      dataIndex: 'oneItem',
      render: (text, record: any) => (
        <span>
          {record.oneItem.indicatorName}
        </span>
      ),
      onCell: (_, index: number) => {
        return {
          rowSpan: dataConfig.onespan[index]
        }
      }
    },
    {
      title: '二级指标',
      dataIndex: 'oneItem',
      render: (text, record: any) => (
        <span>
          {record.twoItem.indicatorName}
        </span>
      ),
      onCell: (_, index: number) => {
        return {
          rowSpan: dataConfig.towspan[index]
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
    <Table pagination={false} rowKey={(record) => record.indicatorId} columns={columns} dataSource={props.data} bordered />
  );
}

export default table;