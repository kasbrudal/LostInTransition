import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';

function TranslationsList() {
    //const currentUser = useSelector(selectUser);
    const userId = 1;
    const [translations, setTranslations] = useState([]);
    const apiURL = 'https://lost-in-translation-production-9e97.up.railway.app';
    const apiKey = 'experis';
    
    useEffect(() => {
        if (!userId) {
            return;
        }
        fetch(`${apiURL}/translations/${userId}`, {
            headers: {
                'X-API-Key': apiKey,
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not fetch translations');
            }
            return response.json();
        })
        .then(data => {
            // Assuming the returned data has a translations field which is an array.
            const lastTenTranslations = data.translations.slice(-10);
            setTranslations(lastTenTranslations);
        })
        .catch(error => {
            console.error(error);
        });
    }, [userId]);

    return (
        <div>
            <h2>Last 10 Translations</h2>
            <ul>
                {translations.map((translations, index) => (
                    <li key={index}>
                        {translations} 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TranslationsList;




/*import { useState, useEffect } from 'react';
import Translation from './Translation.jsx';

function TranslationsList() {
    const [translations, setTranslations] = useState([]);
    const apiURL = 'https://lost-in-translation-production-9e97.up.railway.app';
    const apiKey = 'experis';
    const currentUser = 'mega-mind';
    
    useEffect (() => {
        fetch(`${apiURL}/translations?username=${currentUser}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            setTranslations(data.slice(-10));
        })
        .catch(error => console.error(error.message))
    }, []);

    const handleClearTranslations = () => {
        setTranslations([]);
    };

    return (
        <div>
            <ul>
                {translations && translations.map((translation, index) => (
                    <li key={index}>{translation.text}
                        <img 
                            src={require(`../assets/individial_signs/${translation.imgValue}.png`)}  
                            alt={translation.imgValue}
                        />
                    </li>
                ))}
            </ul>
   
        </div>
    )
}

export default TranslationsList;*/