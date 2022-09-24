import React from 'react';
import '../../assets/styles/LoadingScreen.css';

function Loading() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        padding: 0,
        margin: 0,
        background: '#000'
      }}>
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </div>
  );
}

export default Loading;
