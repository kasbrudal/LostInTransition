   import React, { useState } from "react";
   import { Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";
   import { useNavigate } from "react-router-dom";

   function LoginForm() {
      const [username, setUsername] = useState('');

      const navigate = useNavigate();



      const handleInputChange = (event) => {
         setUsername(event.target.value);
      };

      const handleUpload = () => {
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
               console.log('New user:', newUser);
               localStorage.setItem("user.Id", newUser.id)
               localStorage.setItem("user.Username", newUser.username)
               navigate("/translate")
            })
            .catch(error => {
               console.error('Error:', error.message);
            });
         
      };

      return ( 
         <Form >
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
