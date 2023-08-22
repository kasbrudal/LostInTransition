import { useState } from "react";
import newUser from './Login.jsx'

function Translator() {
    const [inputValue, setInputValue] = useState('');
    const [translations, setTranslations] = useState([]);
    const apiURL = 'https://lost-in-translation-production-9e97.up.railway.app';
    const apiKey = 'experis';
    //const currentUser = useSelector(selectUser);
    const userId = localStorage.getItem("userId");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
      
      const handleTranslation = () => {

        fetch(`${apiURL}/translations/${userId}`, {
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
          console.log(newUser)
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
          <div>
                {inputValue.split('').map((imgValue, index) => (
                    <img key={index} 
                        src={require(`../assets/individial_signs/${imgValue}.png`)}  
                        alt={imgValue}
                    />
                ))}
            </div>
          <div className="translated-box">
            <h1>Oversatt tekst</h1>
  {translations.map((translation, translationIndex) => (
    <div key={translationIndex}>
      {translation.split('').map((letter, letterIndex) => (
        <img
          key={letterIndex}
          src={require(`../assets/individial_signs/${letter}.png`)}
          alt={letter}
        />
      ))}
    </div>
  ))}
</div>

          
        </div>
      );
  }

  export default Translator;

