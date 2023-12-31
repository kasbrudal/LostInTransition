import React, { useState, useEffect } from 'react';
import '../css/login.css'
import {  useNavigate } from 'react-router-dom';

function TranslationsList() {
    const currentUser = localStorage.getItem("userId");
    const [translations, setTranslations] = useState([]);
    const apiURL = 'https://lost-in-translation-production-9e97.up.railway.app';
    const apiKey = 'experis'; 

    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            return;
        }
        fetch(`${apiURL}/translations/${currentUser}`, {
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

    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("username");

        navigate("/");
    };


    const handleRemoveTranslations = () => {
        fetch(`${apiURL}/translations/${currentUser}`, {
            method: 'PATCH', 
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                translations: [] 
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('could not delete');
            }
            setTranslations([]); 
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <div className='translate'>
            <h2>Last 10 Translations</h2>
            <button onClick={handleRemoveTranslations}>Clear translations</button>
            <ul>
                {translations.map((translation, translationIndex) => (
                    <div key={translationIndex}>
                        <li> {translation.split('').map((letter, letterIndex) => (
                            <img
                                key={letterIndex}
                                src={require(`../assets/individial_signs/${letter}.png`)}
                                alt={letter}
                                width={'100px'}
                            />
                            ))}
                        </li>
                    </div>
                ))}
            </ul>
            <button onClick={handleLogout}>Logout</button>

        </div>
    );
}

export default TranslationsList;
