import React from 'react';
import './App.css';
/*import { BrowserRouter, Route, Routes,NavLink } from 'react-router-dom';
import LoginPage from './Pages/LoginPage.jsx'
import TranslatePage from './Pages/TranslatePage.jsx'*/
import Header from './Components/Header.jsx'
import { Provider } from 'react-redux';
import { store } from './Redux/store';

export function App() {

  return (
    <Provider store={store}>
      <header>
        <Header></Header>
      </header>
    </Provider>
  );
}

export default App;
