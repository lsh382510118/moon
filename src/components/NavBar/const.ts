export const navData = [
  {
    label: 'Home',
    link: '/home'
  },
  {
    label: 'Awaken Artical',
    link: '/article'
  },
  {
    label: 'HTML5/CSS3',
    link: '/html'
  },
  {
    label: 'JavaScript',
    link: '/javascript'
  },
  {
    label: 'Plug-in Unit',
    link: '/plugin'
  },
  {
    label: 'Information',
    link: '/information'
  },
];

export interface navItemType {
  label: string,
  link: string,
  params?: string,
  key?: any,
}