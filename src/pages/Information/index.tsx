import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { getData, getNews, getStocksHistory } from './services';
import styles from './index.module.less'
const Information = () => {

  const [newsList, setNews] = useState([]);
  const { run: getNewsInfo } = useRequest(
    () => {
      return getNews();
    },
    {
      manual: true,
      onSuccess(res: any) {
        const {result} = res;
        const list = result?.list
        if(list && list.length > 0) {
          setNews(list)
        }
      console.log("🚀 ~ file: index.tsx:26 ~ onSuccess ~ res:", res)
      },
    },
  );


  const { run: getStocksInfo } = useRequest(
    () => {
      return getStocksHistory();
    },
    {
      manual: true,
      onSuccess(res: any) {
        console.log("🚀 ~ file: index.tsx:33 ~ onSuccess ~ res:", res)
      },
    },
  );

  useEffect(()=> {
    getNewsInfo();
    getStocksInfo();
  }, [])

const openNew = (url: string) => {
  window.open(url)
  return {
}
}
  return (
    <div className={styles.newsWrap}>
      {
        newsList.map((item, index) => {
          const {
            ctime, 
            description, 
            picUrl, 
            url, 
            title
          } = item;
          return (
            <div className={styles.newsItem} key={index}>
              <div className={styles.newsImage}>
                <img src={picUrl} alt={title && (title as string).substring(0, 3)}></img>
              </div>
              <div className={styles.newsInfo}>
                <p className={styles.top}>
                  <span className={styles.title} onClick={()=>{openNew(url)}}>{title}</span>
                </p>
                <p className={styles.dec}>{description}</p>
                <div className={styles.time}>{ctime}</div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Information;
