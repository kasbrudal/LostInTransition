import { useState } from "react"
import { Form, FormControl, FormLabel, FormGroup } from "react-bootstrap"

function translationText() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission if needed
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
            <img src="" alt="" srcset="" />
        {inputValue.split('').map((letter, index) => (

          <img key={index} src={`../assets/individial_signs/${letter}.png`}  alt={letter}/>
        ))}
        </div>
      </div>
    );
  }
  
  export default translationText;