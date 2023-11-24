import { skillsArticles } from './articles/RDSkills';
import { gitArticles } from './articles/gitArticles';




export const articleDataMap = [
  {
    type: '研发技巧',
    articles: [
      ...skillsArticles,
    ]
  },
  {
    type: 'Git',
    articles: [
      ...gitArticles,
    ]
  },
  {
    type: '性能优化',
    articles: [
      ...gitArticles,
    ]
  },
];

