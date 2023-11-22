import React from 'react';
import './index.less';

const Home = () => {
  return (
    <div className='main-content'>
      <div className="canvas-point canvasCode" id="canvasPoint">
        <iframe src="./html/canvasPoint.html" height="100%"></iframe>
      </div>
      <div className="canvas-point DivCode" id="divPoint">
        <iframe src="./html/divPoint.html" height="100%"></iframe>
      </div>
    </div>
  );
};

export default Home;
