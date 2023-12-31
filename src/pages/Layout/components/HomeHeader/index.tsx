import React from 'react';
import './index.less';

const HomeHeader = () => {
  return (
    <section className="page-header">
      <h1 className="project-name">如果你做的事情毫不费力，就是在浪费时间<span>——Heidi Roizen</span></h1>
      <h2 className="project-tagline">Moonya的个人微博的个人博客</h2>
      <div className="banner-btnBox">
        <a href="https://github.com/lsh382510118/moon" className="btn">MY blog project</a>
        <a href="https://github.com/lsh382510118/moon/archive/refs/heads/master.zip" className="btn">Download .zip</a>
      </div>
  </section>
  );
};

export default HomeHeader;
