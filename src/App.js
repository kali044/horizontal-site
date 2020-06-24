import React from 'react';
import './App.scss';
import background from './images/background.png'

function App() {
  return (
    <div className="flexbox">
      <div className="gap"></div>
      <div className="frame1"></div>
      <div className="gap"></div>
      <div className="frame2"></div>
      <div className="gap"></div>
      <div className="frame3"></div>
      <div className="gap"></div>
      <div className="background">
        <img src={background} alt='last of us'/>
      </div>
    </div>
  );
}

export default App;
