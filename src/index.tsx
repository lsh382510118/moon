import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const Article = lazy(() => import('@/pages/Article'));


const App = () => {
  return (
    <Suspense fallback={"loading"}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Routes >
    </Suspense >
  );
};

// const root = document.getElementById('root');
// const rootRender = ReactDOM.createRoot(root);
// rootRender.render(<App />);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
