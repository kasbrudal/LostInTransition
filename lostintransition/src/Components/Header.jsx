import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { LoginPage } from '../Pages/LoginPage';
import { TranslatePage } from '../Pages/TranslatePage';
import { ProfilePage } from '../Pages/ProfilePage';

export function navBar(){  
	return (
		<BrowserRouter>
			<NavLink to="/">Lost in translation</NavLink> <br/>
			<NavLink to="/translate">Translate</NavLink> <br/>
			<NavLink to="/profile">Profile</NavLink>
	
			<Routes>
				<Route path={'/'} element={<LoginPage/>}></Route>
				<Route path={'/Translate'} element={<TranslatePage/>}></Route>
				<Route path={'/Profile'} element={<ProfilePage/>}></Route>
			</Routes>
		</BrowserRouter>
	)}
	
export default navBar