import React, { useEffect, useState } from 'react';
import { stockData } from './constants';
import styles from './index.module.less';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import ReactECharts from 'echarts-for-react';
import { setChartOptions, setPieOptions } from './utils';

const StocksView = () => {
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [data, setData] = useState<DataType[]>([]);
  const [option, setOption] = useState(null);
  const [pieOption, setPieOption] = useState(null);

  const [] = useState(false);

  useEffect(() => {
    const keys = Object.keys(stockData);
    const res:any = [];
    const params = {
      dates: [],
      nums: [],
    }
    keys.map(key => {
      const monthData = stockData[key];
      monthData.map(dataItem => {
        res.push({
          ...dataItem,
          key: dataItem.date,
          date: dataItem.date,
          closingprice: dataItem.closingprice,
          changepercent: dataItem.changepercent,
        })
        params.dates.push(dataItem.date);
        params.nums.push(dataItem.changepercent);
      })
    })
    setOption(setChartOptions(params));
    setPieOption(setPieOptions(res));

    setData(res?.reverse());
  }, [])

  const columns: ColumnsType<DataType> = [
    {
      title: 'date',
      width: 120,
      dataIndex: 'date',
    },
    {
      title: '最终价格',
      dataIndex: 'closingprice',
    },
    {
      title: 'Increase',
      dataIndex: 'changepercent',
      width: 80,
      render: function (text, record, index) {
        const { changepercent } = record;
        if (changepercent > 0) {
          return <span className={styles.up}>{changepercent}%</span>
        } else if (changepercent < 0) {
          return <span className={styles.down}>{changepercent}%</span>
        }
      }
    },
  ];
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <div className={styles.echartWrap}>
        {
          option && <ReactECharts
            className={styles.echart}
            option={option}
          />
        }

      </div>

      <div className={styles.echartWrap}>
        {
          pieOption && <ReactECharts
            className={styles.echart}
            option={pieOption}
          />
        }
      </div>


      <div className={styles.tableWrap}>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default StocksView;
