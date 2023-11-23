import React from 'react';
import './index.less';
import {pointPath} from './constants'

const Home = () => {
  return (
    <div className='main-content'>
      <div className="canvas-point canvasCode" id="canvasPoint">
        <iframe src={pointPath.canvas} height="100%"></iframe>
      </div>
      <div className="canvas-point DivCode" id="divPoint">
        <iframe src={pointPath.div} height="100%"></iframe>
      </div>
    </div>
  );
};

export default Home;
