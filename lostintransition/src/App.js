import React from 'react';
import './App.css';
/*import { BrowserRouter, Route, Routes,NavLink } from 'react-router-dom';
import LoginPage from './Pages/LoginPage.jsx'
import TranslatePage from './Pages/TranslatePage.jsx'*/
import Header from './Components/Header.jsx'

export function App() {

  return (
    <header>
      <Header></Header>
    </header>
  /*<BrowserRouter>
    <NavLink to="/">Lost in translation</NavLink> <br/>
    <NavLink to="/translate">Translate</NavLink>
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/Translate' element={<TranslatePage/>}></Route>
      </Routes>    
        
    </div>
    </BrowserRouter>*/
    
  );
}

export default App;
