import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, addTranslation, getCurrentUser } from "../Redux/userSlice.js";

function Translator() {
  const [inputValue, setInputValue] = useState('');
  const [translations, setTranslations] = useState([]);
  const apiURL = 'https://lost-in-translation-production-9e97.up.railway.app';
  const apiKey = 'experis';

    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
            setRefreshKey(prevKey => prevKey + 1);
        }
    }, []);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user.id)
  const currentUserId = localStorage.getItem("userId")
  console.log(localStorage.getItem("userId"))
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const newInputValue = event.target.value.toLowerCase().replace(/[^a-z]/g, '');
    setInputValue(newInputValue);
  };
  
  const handleTranslation = () => {
    
    fetch(`${apiURL}/translations/${currentUserId}`, {
      method: 'PATCH',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        translations: [...user.translations, inputValue]
      })
    })
    .then(response => response.json())
    .then(updatedUser => {
      dispatch(addTranslation(inputValue));
      setTranslations(updatedUser.translations);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div key={refreshKey}>
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        maxLength={40}
      />
      <button onClick={handleTranslation}>Translate</button>
      <div>
        {inputValue.split('').map((imgValue, index) => (
          <img
            key={index}
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
