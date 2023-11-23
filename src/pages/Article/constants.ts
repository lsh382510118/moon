import { skillsArticles } from './articles/RDSkills';


export const allArticle = {
  ...skillsArticles,
}


export const articleDataMap = [
  {
    type: '研发技巧',
    articles: [
      {
        title: '通过nginx 修改源webpage的样式',
        id: '001001',
      },
      {
        title: 'js 下载页面内部的所有图片',
        id: '001002',
      },
      {
        title: '给你十万条数据，给我顺滑的渲染出来！',
        id: '001003',
      },
      {
        title: '前端请求大比拼：Fetch、Axios、Ajax、XHR',
        id: '001004',
      },
    ]
  },
  {
    type: 'Git',
    articles: [
      
    ]
  },
  {
    type: '性能优化',
    articles: [
      
    ]
  },
];

