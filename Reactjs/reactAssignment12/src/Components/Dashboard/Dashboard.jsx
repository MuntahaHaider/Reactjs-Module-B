
import React, { useState } from 'react';

const Dashboard = () => {
  const [position, setPosition] = useState({ top: '40%', left: '40%' });

  const moveButton = () => {
    const newTop = Math.random() * (window.innerHeight - 50) + 'px';
    const newLeft = Math.random() * (window.innerWidth - 100) + 'px';
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <button
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'top 0.2s, left 0.2s',
        
      }}
      onMouseEnter={moveButton}
    >
      "successful"
    </button>
  );
};


export default Dashboard;
