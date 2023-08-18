import { useState } from "react"
import { Form, FormControl, FormLabel, FormGroup } from "react-bootstrap"

function translationText() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, translateValue] = useState('');

    const handleInputChange = (event) => {
        translateValue(event.target.value.toLowerCase());
    
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };


  
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <FormLabel>Write something</FormLabel>
            <FormControl
              type="text"
              placeholder="Write here"
              value={inputValue}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Form>
        <div>

        {inputValue.split('').map((imgValue, index) => (
            <img key={index} 
                src={require(`../assets/individial_signs/${imgValue}.png`)}  
                alt={imgValue}
            />
        ))}
        </div>
      </div>
    );
  }
  
  export default translationText;