import React from 'react';
import { Collapse } from 'antd';
import { articleDataMap } from './constants' 
import styles from './index.module.less'
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const articleItemClick = (item: any) => {
  console.log("🚀 ~ file: index.tsx:13 ~ articleItemClick ~ item:", item)
}

export const getArticle = () => {
  const res: any =[]
  articleDataMap.map((item, index) => {
    const {type, articles } = item;
    const articleList = articles.map((art: any) => {
      return  <li key={art?.key} className={styles['article-item']} onClick={()=>{
        articleItemClick(art)
      }}>{art.title}</li>
    })


    res.push({
      key: `${index+1}`,
      label: type,
      children: <ul className={styles['article-list']}>{articleList}</ul>,
    })
  })
  return res;
}
const Article: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className={styles['article-wrap']}>
      <Collapse items={(getArticle())} defaultActiveKey={['1']} onChange={onChange} />
    </div>
  );
};

export default Article;

