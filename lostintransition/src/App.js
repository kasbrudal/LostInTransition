import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes,NavLink } from 'react-router-dom';
import LoginPage from './Pages/LoginPage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import TranslatePage from './Pages/TranslatePage.jsx'

function App() {
 /* const apiURL = 'https://lost-in-translation-production-2dd1.up.railway.app/'
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
*/
  return (
  <BrowserRouter>
    
    <NavLink to="/">Home</NavLink>
    <NavLink to="/translate">Translate</NavLink>
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/Translate' element={<TranslatePage/>}></Route>
      </Routes>    
        
    </div>
    </BrowserRouter>
    
  );
}

export default App;
