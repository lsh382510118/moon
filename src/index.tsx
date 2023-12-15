import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import '@/assets/styles/index.less';

import Layout from '@/pages/Layout'
import { baseRouter } from './constants';

const Home = lazy(() => import('@/pages/Home'));
const Article = lazy(() => import('@/pages/Article'));
const Html = lazy(() => import('@/pages/Html'));
const Javascript = lazy(() => import('@/pages/Javascript'));
const Plugin = lazy(() => import('@/pages/Plugin'));
const Information = lazy(() => import('@/pages/Information'));


const App = () => {
  return (
    <Suspense fallback={"loading"}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/html" element={<Html />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/plugin" element={<Plugin />} />
        <Route path="/information" element={<Information />} />
      </Routes >
    </Suspense >
  );
};


ReactDOM.render(
  <BrowserRouter basename={baseRouter}>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
);
