import React from 'react';
import './Choosing.css';
import { useNavigate } from 'react-router-dom';
import './LoginButton.css';

const LoginButton = () => {
	
	const navigate = useNavigate();
	function HandClick()
	{
		navigate('/LoginChoice')
	}
	
  return (
	  

      <div className="button-wrapper">
      
      <button className = 'button1' onClick={HandClick}>
   		 Login
      </button>

      </div>


  );
};

export default LoginButton;






