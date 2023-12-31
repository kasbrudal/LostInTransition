import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
