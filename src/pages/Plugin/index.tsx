import React, { useState } from 'react';
import styles from './index.module.less';
import { pluginList, pluginItemType } from './constant';
import { Modal } from 'antd';
const Plugin = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [pluginLink, setPluginLink] = useState('');
  
  const onClick = (item: pluginItemType) => {
    const { name, link } = item;
    setIsModalOpen(true);
    setTitle(name);
    setPluginLink(link);
    console.log("🚀 ~ file: index.tsx:9 ~ onClick ~ item:", item)
  };

  const handleCloseModal=() => {
    setIsModalOpen(false);
  }

  const PluginLinks = pluginList.map((item: pluginItemType, index) => {
    const { name, icon, background } = item;
    return (
      <li className={styles['plugin-item']} onClick={()=>{ onClick(item)}}>
        <div className={styles['plugin-item-inner']}>
          <div className={`${styles['plugLi-ico']} ${background}`}><i className={`ico ${styles['ico']} ${icon}`}></i></div>
          <div className={styles['plugin-item-name']}>{name}</div>
        </div>
      </li>
    )
  });


  return (
    <div className={styles['plugin-wrap']}>
      <ul className={styles['plugin-list']}>
        {PluginLinks}
      </ul>
      <Modal
          title={title}
          open={isModalOpen}
          closable={true}
          onCancel={handleCloseModal}
          footer={null}
          width="90%"
          bodyStyle={{ height: '80vh', overflow: 'auto' }}
        >
          <div className={styles['plugin-container']}>
            <iframe className={styles['plugin-iframe']} src={pluginLink}></iframe>
          </div>
      </Modal>
    </div>
  );
};

export default Plugin;
