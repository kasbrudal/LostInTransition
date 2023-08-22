import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { LoginPage } from '../Pages/LoginPage';
import { TranslatePage } from '../Pages/TranslatePage';
import { ProfilePage } from '../Pages/ProfilePage';
import '../css/login.css'



export function navBar(){  
	return (
		<BrowserRouter>
		<div class="header">
			<h1>Lost in translation</h1>
			<NavLink to="/">Lost in translation</NavLink> <br/>
			<NavLink to="/translate">Translate</NavLink> <br/>
			<NavLink to="/profile">Profile</NavLink>
		</div>
			<Routes>
				<Route path={'/'} element={<LoginPage/>}></Route>
				<Route path={'/Translate'} element={<TranslatePage/>}></Route>
				<Route path={'/Profile'} element={<ProfilePage/>}></Route>
			</Routes>
		</BrowserRouter>
	)}
	
export default navBar