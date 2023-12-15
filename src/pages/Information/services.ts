import request from '@/request';
const tianApi = 'https://apis.tianapi.com/';
const key="8205bca7c4d2a9ad2e9b312de9c34099";



export const getData = async () => {
  return request(
    `${tianApi}finance/index?key=${key}&code=sh603936,sz002396&list=0`,
    {},
    {
      method: "GET",
      returnType: 'body',
    },
  );
};


export const getNews = async () => {
  return request(
    `${tianApi}topnews/index?key=${key}`,
    {},
    {
      method: "GET",
      returnType: 'body',
    },
  );
};

// sh603936,sz002396
export const getStocksHistory = async () => {
  return request(
    `https://api.jisuapi.com/stockhistory/query?code=603936&startdate=&enddate=&appkey=6fa7345e38cbc5d1`,
    {},
    {
      method: "POST",
      returnType: 'body',
    },
  );
};


