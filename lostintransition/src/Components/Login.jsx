import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
export function loginForm() {
   const apiURL = 'https://lost-in-translation-production-9e97.up.railway.app'
   const apiKey = 'experis'

   fetch(`${apiURL}/translations`, {
         method: 'POST',
            headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: 'mega-mind', 
                translations: [] 
            })
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('Could not create new user')
        }
        return response.json()
        })
        .then(newUser => {
        // newUser is the new user with an id
        })
        .catch(error => {
        })
   return ( 
      <Form>
         <FormGroup className="mb-3">
            <FormLabel>Write your name</FormLabel>
            <FormControl type="name" placeholder="Write here"/>
         </FormGroup>
      </Form>
   )
   
}
export default loginForm