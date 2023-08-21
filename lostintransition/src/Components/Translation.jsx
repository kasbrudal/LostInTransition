import { useState } from "react";
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import { Form, FormControl, FormLabel, FormGroup } from "react-bootstrap";

function Translator() {
    const [inputValue, setInputValue] = useState('');
    const [translations, setTranslations] = useState([]);
    const apiURL = 'https://lost-in-translation-production-9e97.up.railway.app';
    const apiKey = 'experis';
    const currentUser = useSelector(selectUser);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
      
      const handleTranslation = () => {
        // Implement the PATCH request here and update the translations state
        // Inside the handleTranslation function:

        fetch(`${apiURL}/translations/${currentUser.id}`, {
        method: 'PATCH',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            translations: [...translations, inputValue] // Using spread operator to keep the previous translations and add the new one
        })
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('Could not update translations history');
        }
        return response.json();
        })
        .then(updatedUser => {
        // Set the updated translations to our state
        setTranslations(updatedUser.translations);
        })
        .catch(error => {
        console.error(error);
        });

      };

      return (
        <div>
          <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            maxLength={40}
          />
          <button onClick={handleTranslation}>Translate</button>
      
          <div className="translated-box">
            {translations.map((translation, index) => (
              <span key={index}>
                {translation}
              </span>
            ))}
          </div>
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

  export default Translator;

/*function translationText() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, translateValue] = useState('');
    const apiUrl = 'https://lost-in-translation-production-9e97.up.railway.app';

    const handleInputChange = (event) => {
        translateValue(event.target.value.toLowerCase());
    
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch(`${apiUrl}/translations`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            translations: inputValue,
        })
    })
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
  
  export default translationText;*/