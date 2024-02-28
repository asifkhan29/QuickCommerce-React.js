import React, { useState } from 'react';
import axios from './axios-config';



const Register = () => {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #ff6b6b, #5565ff)',
  };

  const formStyles = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    width: '400px', // Increase the width
    height:'500px',
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    gap: '22px', // Increase the gap between items
  };

  const headingStyles = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const inputStyles = {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
  };

  const buttonStyles = {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#5565ff',
    color: 'white',
    cursor: 'pointer',
  };
  
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [state,setState] = useState('');
   const [city,setCity] = useState('');
    const [password,setPassword] = useState('');
   const[phoneNumber,setPhoneNumber] = useState('');
   
    const submitForm = async (e) => {
    e.preventDefault();
     console.log('working here');
    try {
      // Send registration data to the Spring Boot backend
      const response = await axios.post('api/registration' , {name,email,password,state,city,phoneNumber});
      // Handle successful registration (e.g., show a success message or redirect to login)
      console.log('Registration successful:', response.data);
    } catch (error) {
      // Handle registration error (e.g., display an error message)
      console.error('Registration error:', error);
    }
  };
 
  return (
    <div style={containerStyles}>
      <div style={formStyles}>
        <h2 style={headingStyles}>Register</h2>
        
        <form onSubmit={submitForm}>
          
          <input type="text" name = "name" value={name} placeholder="Name" style={inputStyles} onChange={(e) => setName(e.target.value)}  />
          <input type="email" name = "email" value = {email} placeholder="email" style={inputStyles} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" name = "state"  value= {state} placeholder="State" style={inputStyles} onChange={(e) => setState(e.target.value)} />
          <input type="text"name = "City" value={city} placeholder="City" style={inputStyles} onChange={(e) => setCity(e.target.value)} />
          <input type="password" name = "password" value={password} placeholder="Password" style={inputStyles} onChange={(e) => setPassword(e.target.value)} />
          <input type  = "number" name = "phoneNumber" value={phoneNumber} placeholder="Enter Phone Number" style = {inputStyles} onChange={(e) => setPhoneNumber(e.target.value)}/>
          <button type="submit" style={buttonStyles}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;



      