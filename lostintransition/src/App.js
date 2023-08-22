import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import LoginPage from './Pages/LoginPage.jsx';
import TranslatePage from './Pages/TranslatePage.jsx';
import ProfilePage from './Pages/ProfilePage.jsx';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setIsLoggedIn(!!userId);
  }, []);

  return (
   
    <header>

      <BrowserRouter>
        <div className='header'>
          <h1>Lost in translation</h1>
          <NavLink to="/">Lost in translation</NavLink> <br/>
          <NavLink to="/translate">Translate</NavLink> <br/>
          { isLoggedIn && <NavLink to="/profile">Profile</NavLink>}
        </div>

        <Routes>
          <Route path={'/'} element={<LoginPage/>}></Route>
          <Route path={'/Translate'} element={<TranslatePage/>}></Route>
          <Route path={'/Profile'} element={<ProfilePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
