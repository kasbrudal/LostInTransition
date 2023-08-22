import React, { useState, useEffect } from 'react';

function TranslationsList() {

    const currentUser = localStorage.getItem("userId")
    const [translations, setTranslations] = useState([]);
    const apiURL = 'https://lost-in-translation-production-9e97.up.railway.app';
    const apiKey = 'experis'; 

    useEffect(() => {
        if (!currentUser || !currentUser.userId) {
            return;
        }
        fetch(`${apiURL}/translations/${currentUser.userId}`, {
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
            const lastTenTranslations = data.translations.slice(-10);
            setTranslations(lastTenTranslations);
        })
        .catch(error => {
            console.error(error);
        });
    }, [currentUser]);

    return (
        <div>
            <h2>Last 10 Translations</h2>
            <ul>
                {translations.map((translation, index) => (
                    <li key={index}>
                        {translation} 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TranslationsList;
