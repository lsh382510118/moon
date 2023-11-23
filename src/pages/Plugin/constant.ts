const htmlBasePath = './html';

export interface pluginItemType {
  name: string,
  link: string,
  icon: string,
  background: string,
}

export const pluginList = [
  {
    name: '鼠标滑过->收缩菜单[纯css]',
    link: `${htmlBasePath}/plugIn1.html`,
    icon: 'biaotitubiao',
    background: 'blue-ico',
  },
  {
    name: '五级联动',
    link: `${htmlBasePath}/plugIn2.html`,
    icon: 'xieya',
    background: 'zi-ico',
  },
  {
    name: 'canvas 实时进度条',
    link: `${htmlBasePath}/plugIn3.html`,
    icon: 'shuidianmei',
    background: 'blue-ico',
  },
  {
    name: '垂直图片滑动',
    link: `${htmlBasePath}/plugIn4.html`,
    icon: 'xiyan01',
    background: 'water-ico',
  },
  {
    name: 'canvas内判断点击在路径的内外',
    link: `${htmlBasePath}/plugIn5.html`,
    icon: 'tubiao10',
    background: 'orange-ico',
  },
  {
    name: '筛选性 菜单 ',
    link: `${htmlBasePath}/plugIn6.html`,
    icon: 'pinpai',
    background: 'fen-ico',
  },
  {
    name: '整装待发',
    link: ``,
    icon: 'internet',
    background: 'bgray-ico',
  },
]