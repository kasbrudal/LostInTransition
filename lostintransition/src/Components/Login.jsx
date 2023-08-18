import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";

function LoginForm() {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUpload = () => {
    if (username.trim() !== '') {
      const apiURL = 'https://lost-in-translation-production-9e97.up.railway.app';
      const apiKey = 'experis';

      fetch(`${apiURL}/translations`, {
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
        // Handle successful response here
        console.log('New user:', newUser);
      })
      .catch(error => {
        // Handle error here
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
