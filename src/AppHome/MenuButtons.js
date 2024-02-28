import React from 'react';
import { useNavigate } from 'react-router-dom';






const HomePanel = () => {
  
	const navigate = useNavigate();
	function StoreButton()
	{
		navigate('/Stores')
	}

	function Home()
	{
		navigate('/UserHome')
	}


  const BarStyles = {
    padding: '10px',
    background: 'white',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '100px',
    width: '1200px',
    height: '60px',
    marginTop: '40px',
  };

  

  const BarButtonStyles = {
    padding: '8px 15px',
    border: 'none',
    borderRadius: '10px',
    background: '#ffa726',
    color: 'white',
    cursor: 'pointer',
    marginLeft:'20px',
    marginRight: '20px',
    width:'1800px',
    height: '50px',
  };



  return (
		    
    <div >
      

        <div style={BarStyles}>
          
          <button onClick={Home} style={BarButtonStyles}>Home</button>
          <button style={BarButtonStyles}>Mens</button>
          <button style={BarButtonStyles}>Women</button>
          <button onClick={StoreButton} style={BarButtonStyles}>Stores</button>
            <button style={BarButtonStyles}>Cart</button>
          <button style={BarButtonStyles}>Order</button>
          <button style={BarButtonStyles}>Profile</button>
        </div>

      
    
      
   
      
      </div>
  );
 
}
export default HomePanel;




      