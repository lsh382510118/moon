import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import '@/assets/styles/index.less';

import Layout from '@/pages/Layout'

const Home = lazy(() => import('@/pages/Home'));
const Article = lazy(() => import('@/pages/Article'));
const Html = lazy(() => import('@/pages/Html'));
const Javascript = lazy(() => import('@/pages/Javascript'));


const App = () => {
  return (
    <Suspense fallback={"loading"}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/html" element={<Html />} />
        <Route path="/javascript" element={<Javascript />} />
      </Routes >
    </Suspense >
  );
};


ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
);
