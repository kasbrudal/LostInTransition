import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { LoginPage } from '../Pages/LoginPage';
import { TranslatePage } from '../Pages/TranslatePage';
import { ProfilePage } from '../Pages/ProfilePage';
import '../css/login.css'



export function navBar(){  
	return (
		<div>
			<BrowserRouter>
			<NavLink to="/">Lost in translation</NavLink> <br/>
			<NavLink to="/translate">Translate</NavLink> <br/>
			<NavLink to="/profile">Profile</NavLink>
			</BrowserRouter>
		</div>
		
	)}
	
export default navBar