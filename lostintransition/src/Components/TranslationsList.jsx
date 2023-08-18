import { useState, useEffect } from 'react';
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
            {/*{translations && translations.map(translation => 
            <Translation apiKey={translation.id} currentTranslation={translation}></Translation>)}*/}
        </div>
    )
}

export default TranslationsList;