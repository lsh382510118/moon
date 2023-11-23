import React, { useRef, useState } from 'react';
import './index.less';
import { navData, navItemType } from './const';
import { useNavigate } from 'react-router-dom';




const NavBar = () => {
  const targetRef = useRef(null);
  const navigate = useNavigate();
  const targetElement = targetRef.current;
  const [active, setActive] = useState(0);

  const onLink = (item: navItemType, index: number) => {
    setActive(index)
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement)?.offsetTop,
        behavior: 'smooth' // 平滑滚动
      });
    };

    navigate({
      pathname: item.link,
      search: item.params || '',
    });

  };

  const NavDoms = navData.map((item: navItemType, index) => {
    return (
      <div 
        key={item?.key || index}
        onClick={()=>{onLink(item, index)}}
        className={active === index ? 'active' : ''}
      >{item.label}</div>
    )
  });

  return (
    <div className="nav-box" ref={targetRef}>
      <nav className="main-nav" id="mainNav">
        {NavDoms}
      </nav>
    </div>
  );
};

export default NavBar;
