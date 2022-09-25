import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/ErrorScreen.css';

function Error() {
  const history = useNavigate();
  const handleBack = () => {
    history('/starships');
  };
  return (
    <div className="neon_main">
      <div className="neon">ERROR</div>
      <button onClick={handleBack} className="button_back_starships">
        Back StarShips
      </button>
    </div>
  );
}

export default Error;
