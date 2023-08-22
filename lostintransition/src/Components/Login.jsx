import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/userSlice';
import { useNavigate } from "react-router-dom";

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

    // Check if the username is already registered
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
        // Username is already registered, update the Redux store
        dispatch(setUser(userData[0]));
        console.log('Existing user:', userData[0]);
        navigate('/translate')
      } else {
        // Username is not registered, create a new user
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
    <Form>
      <FormGroup className="mb-3">
        <FormLabel>Write your name</FormLabel>
        <FormControl 
          type="text" 
          placeholder="Write here" 
          value={username}
          onChange={handleInputChange}
        />
        <Button onClick={handleUpload}>Upload</Button>
      </FormGroup>
    </Form>
  );
}

export default LoginForm;

