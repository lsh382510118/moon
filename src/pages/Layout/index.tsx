import React from 'react';
import HomeHeader from './components/HomeHeader';
import NavBar from '@/components/NavBar';

const Layout = (props: any) => {
  return (
    <div>
      <HomeHeader />
      <NavBar />
      <div>
       { props.children}
      </div>
    </div>
  );
};

export default Layout;
