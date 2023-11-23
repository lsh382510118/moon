import React, { useState } from 'react';
import { Collapse, Modal } from 'antd';
import { articleDataMap, allArticle } from './constants';
import MarkdownView from '@/components/MarkdownView';
import styles from './index.module.less';

type articleType = keyof typeof allArticle;

interface articleItemtype {
  title: string;
  id: articleType;
}
const Article: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [filePath, setFilePath] = useState('');

  const articleItemClick = (item: articleItemtype) => {
    const { id , title } = item;
    setTitle(title);
    setIsModalOpen(true);
    id && setFilePath(allArticle[id]);
    console.log("🚀 ~ file: index.tsx:13 ~ articleItemClick ~ item:", item);

  }
  
  const getArticle = () => {
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

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const handleCloseModal=() => {
    setIsModalOpen(false);
  }

  return (
    <div className={styles['article-wrap']}>
      <Collapse items={(getArticle())} defaultActiveKey={['1']} onChange={onChange} />

      <Modal
          title={title}
          open={isModalOpen}
          closable={true}
          onCancel={handleCloseModal}
          footer={null}
          width="90%"
          styles={{ body: { height: '80vh', overflow: 'auto' } }}
        >
          <div className={styles['plugin-container']}>
            <MarkdownView filePath={filePath}  />
          </div>
      </Modal>
    </div>
  );
};

export default Article;

