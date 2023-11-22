import React, { useRef } from 'react';
import './index.less';
import { navData, navItemType } from './const';
import { useNavigate } from 'react-router-dom';




const NavBar = () => {
  const targetRef = useRef(null);
  const navigate = useNavigate();

  const onLink = (item: navItemType) => {

    const targetElement = targetRef.current;

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

  const NavDoms = navData.map((item: navItemType) => {
    return (
      <div onClick={()=>{onLink(item)}} >{item.label}</div>
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
