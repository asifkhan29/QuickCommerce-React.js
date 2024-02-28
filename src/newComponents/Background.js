import React from 'react';
import './Choosing.css';
import { useNavigate } from 'react-router-dom';

const Background = ({ children }) => {
		const navigate = useNavigate();
	function HandClick()
	{
		navigate('/LoginChoice')
	}
	
  return (
    <div className="background-container">
     <div className="button-wrapper">
      
     

      </div>
      <div className="header-container">
        <h1>Infinite Vision</h1>
        
      </div>
      {children}
    </div>
  );
};

export default Background;






