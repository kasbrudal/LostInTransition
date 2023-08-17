import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { LoginPage } from '../Pages/LoginPage';
import { TranslatePage } from '../Pages/TranslatePage';

export function navBar(){  
	return (
		<div>
			<BrowserRouter>
				<NavLink to="/">Lost in translation</NavLink> <br/>
				<NavLink to="/translate">Translate</NavLink>
		
				<Routes>
					<Route path={'/'} element={<LoginPage/>}></Route>
					<Route path={'/Translate'} element={<TranslatePage/>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
)}
export default navBar