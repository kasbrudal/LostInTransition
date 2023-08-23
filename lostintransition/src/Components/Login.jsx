import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/userSlice';
import { useNavigate } from "react-router-dom";
import '../css/login.css'


function LoginForm() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUpload = () => {
  if (username.trim() !== '') {
    const apiURL = 'https://lost-in-translation-production-9e97.up.railway.app';
    const apiKey = 'experis';

    fetch(`${apiURL}/translations?username=${username}`, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error checking username availability');
      }
      return response.json();
      
    })
    .then(userData => {
      if (userData.length > 0) {

        dispatch(setUser(userData[0]));
        console.log('Existing user:', userData[0]);
        localStorage.setItem("userId", userData[0].id)
        localStorage.setItem('username', userData.username)
        navigate('/translate')
      } else {

        return fetch(`${apiURL}/translations`, {
          method: 'POST',
          headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            username: username, 
            translations: [] 
          })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Could not create new user');
          }
          return response.json();
        })
        .then(newUser => {
          dispatch(setUser(newUser));
          console.log('New user:', newUser);
          localStorage.setItem("userId", newUser.id)
          localStorage.setItem('username', newUser.username)

          navigate('translate')
        })
        .catch(error => {
          console.error('Error:', error.message);
        });
      }
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  }
};

  return ( 
    <div className="loginPage">
      <div className="infoBox">
        <div>
          <img src={require("../assets/Logo.png" )} 
          alt="Logo"
          width='200px'/>
        </div>
        <div className="infoText">
          <h1>Lost in Translation</h1>
          <h3>Get started</h3>
        </div>
      </div>
      <div>
      <Form> 
        <FormGroup className="mb-3">
          <FormLabel>What's your name?</FormLabel>
          <FormControl 
            type="text" 
            placeholder="Your name" 
            value={username}
            onChange={handleInputChange}
          />
          <Button onClick={handleUpload}>Enter</Button>
        </FormGroup>
      </Form>
      </div>
    </div>
  );
}

export default LoginForm;

