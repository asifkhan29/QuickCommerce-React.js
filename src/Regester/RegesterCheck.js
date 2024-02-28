import React, { useState } from 'react';
import axios from './axios-config';

  import { ToastContainer, toast } from 'react-toastify';
  import { Button } from 'reactstrap';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const tost= () =>
{
	toast("okk");
	
}

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log('working here');
    try {
      // Send registration data to the Spring Boot backend
      const response = await axios.post('api/register' , {email, password});
      // Handle successful registration (e.g., show a success message or redirect to login)
      console.log('Registration successful:', response.data);
    } catch (error) {
      // Handle registration error (e.g., display an error message)
      console.error('Registration error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name = "email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name = "password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Register</button>
      <hr/>
      <div>
      <ToastContainer/>
      <Button onClick={tost}/>
      </div>
    </form>
  );
};

export default RegistrationForm;





      