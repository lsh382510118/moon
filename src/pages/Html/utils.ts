export const setChartOptions = (params: any) => {
  console.log("🚀 ~ file: utils.ts:2 ~ setChartOptions ~ params:", params)
  const {dates, nums} = params;
  const timeData = dates.map(function (str: string) {
    return str.replace('2023-', '');
  });
  return {
    title: {
      text: '2023 Echart Demo',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false
      }
    },
    axisPointer: {
      link: [
        {
          xAxisIndex: 'all'
        }
      ]
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 1]
      }
    ],
    grid: [
      {
        left: 60,
        right: 50
      },
  
    ],
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLine: { onZero: true },
        data: timeData
      },
  
    ],
    yAxis: [
      {
        name: 'Increase',
        type: 'value',
        max: 10
      }
    ],
    series: [
      {
        name: 'Increase',
        type: 'line',
        symbolSize: 8,
        data: nums,
        smooth: true,
      }
    ]
  };
}

// js 传入年月日格式转化为星期几
export const getWeek = (date: any) => {
  const week = ['日', '一', '二', '三', '四', '五', '六'];
  const dateArr = date.split('-');
  const year = dateArr[0];
  const month = dateArr[1];
  const day = dateArr[2];
  const dateObj = new Date(year, month - 1, day);
  return week[dateObj.getDay()];
}

export const setPieOptions = (datas: any) => {
  const weekData=  [
    { value: 0, name: '星期一' },
    { value: 0, name: '星期二' },
    { value: 0, name: '星期三' },
    { value: 0, name: '星期四' },
    { value: 0, name: '星期五' }
  ];

  datas.map(function (dateItem: any) {
    const { date, changepercent } = dateItem;
    const time = `星期${getWeek(date)}`;
    weekData.map(function (weekItem: any) {
      if (weekItem.name === time && changepercent > 0) {
        weekItem.value += 1;
      }
    });
  });

  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Pie Chart',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter(param) {
            console.log("🚀 ~ file: utils.ts:121 ~ formatter ~ param:", param)
            // correct the percentage
            return param.name + ' (' + param.percent + '%)';
          }
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: weekData
      }
    ]
  };
}